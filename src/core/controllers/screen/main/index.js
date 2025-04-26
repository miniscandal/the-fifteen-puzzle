import { startHandler } from '@core-controllers/screen/start-handler/main';
import { practiceHandler } from '@core-controllers/screen/practice-handler/main';
import { playHandler } from '@core-controllers/screen/play-handler/main';

import { goToScreen } from '@feat-screen/go-to-screen';
import { goToGamePlayScreen } from '@feat-screen/go-to-game-play-screen';
import { updateScreenState } from '@feat-screen/update-screen-state';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';


/**
 * 
 * goToScreen
 * 
 * coreObjects - Object containing the required dependencies.
 * coreObjects.screenId - ID of the target screen.
 * coreObjects.coreControllers - Main application controllers.
 * coreObjects.coreFactories - Factory methods for creating instances.
 * coreObjects.domActions - Functions to manipulate the DOM.
 * coreObjects.coreState - Global application state.
 * 
 */

/**
 * 
 * goToGamePlayScreen
 * 
 * coreObjects - Object containing the required dependencies.
 * coreObjects.screenId - ID of the gameplay screen.
 * coreObjects.coreControllers - Main application controllers.
 * coreObjects.coreFactories - Factory methods for creating instances.
 * } coreObjects.setupGamePlay - Function to set up gameplay logic.
 * coreObjects.domActions - Functions to manipulate the DOM.
 * coreObjects.coreState - Global application state.
 * 
 */


const ScreenController = {
    screenHandlers: {
        [GAME_SCREEN_START]: startHandler,
        [GAME_SCREEN_PRACTICE]: practiceHandler,
        [GAME_SCREEN_PLAY]: playHandler,
    },
    goToScreen(coreObjects) {
        return goToScreen({ ...coreObjects, screenHandlers: this.screenHandlers });
    },
    goToGamePlayScreen(coreObjects) {
        return goToGamePlayScreen({ ...coreObjects, screenHandlers: this.screenHandlers });
    },
    updateScreenState,
    getPreviousScreen: (history) => (history.pop(), history.pop()),
    resetHistory: (history) => history.slice(-1),
};

export { ScreenController };
