import { composeStartScreen } from '@core-composes/screen-composes/compose-start-screen';
import { composePracticeScreen } from '@core-composes/screen-composes/compose-practice-screen';
import { composePlayScreen } from '@core-composes/screen-composes/compose-play-screen';

import { pushScreenState } from '@feat-screen-navigator/update-screen-state';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';
import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


/**
 * ScreenController
 * 
 * Central controller that manages screen navigation and state transitions in the application.
 * It uses controllers, factories, state objects, and DOM actions to initialize and switch screens.
 * 
 * Methods:
 * 
 * - goToScreen(coreObjects): Renders a specific screen using the provided controllers and state.
 * - goToGamePlayScreen(coreObjects): Same as goToScreen, but intended for gameplay-specific screens.
 * - pushScreenState: Function to update the current screen state.
 * - getPreviousScreen(history): Returns the previous screen ID from the navigation history.
 * - resetHistory(screenId): Resets the navigation history starting from the given screen ID.
 * 
 * Expected structure of coreObjects for goToScreen and goToGamePlayScreen:
 * 
 * coreObjs: {
 *   screenId: string; // ID of the target screen
 * 
 *   coreControllers: {
 *     PuzzleGridState: Controller;              // Manages puzzle grid state
 *     PuzzleGridShuffling: Controller;          // Handles puzzle shuffling logic
 *     PuzzleGridTiles: Controller;              // Manages puzzle tile behaviors
 *     ScreenController: Controller;             // Screen management controller (this object)
 *     PuzzleSequenceController: Controller;     // Controls puzzle sequences/progress
 *     PrefersColorSchemeController: Controller; // Applies system color scheme preference
 *   };
 * 
 *   coreFactories: {
 *     PuzzleGridFactory: FactoryFunction; // Responsible for creating puzzle grid instances
 *   };
 * 
 *   coreState: {
 *     currentState: State;          // Current screen state
 *     GameModeState: State;        // Current game mode (e.g., practice, challenge)
 *     createPuzzleState: Function; // Generates individual puzzle state instances
 *   };
 * 
 *   domActions: {
 *     DomPuzzleGrid: DOMController;             // Renders and updates the puzzle grid in the DOM
 *     DomScreenSetupController: DOMController;  // Sets up initial screen DOM and events
 *     DomScreenManagement: DOMController;       // Manages DOM behavior for screen transitions
 *   };
 * 
 *   setupGamePlay?: Function; // (optional) Initializes gameplay-specific logic and state
 * }
 */



const ScreenNavigatorController = {
    screenHandlers: {
        [SCREEN_ID_START]: composeStartScreen,
        [SCREEN_ID_PRACTICE]: composePracticeScreen,
        [SCREEN_ID_PLAY]: composePlayScreen,
    },
    goToScreen({ screenId, ...coreObjects }) {

        return this.screenHandlers[screenId](coreObjects);
    },
    goToGamePlayScreen({ screenId, ...coreObjects }) {

        return this.screenHandlers[screenId](coreObjects);
    },
    pushScreenState,
    backScreenState: ({ state }) => {
        const { previousId, history } = state;

        history.pop();
        history.pop();


        return {
            currentId: previousId,
            history
        };
    },
    getPreviousScreen: (history) => (history.pop(), history.pop()),
    resetHistory: () => ({
        previousId: null,
        currentId: SCREEN_ID_START,
        history: [SCREEN_ID_START]
    }),
};

export { ScreenNavigatorController };
