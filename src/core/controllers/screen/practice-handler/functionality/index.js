import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectPlayScreen, domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY, GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function uiPracticeFunctionality({
    GameModeController,
    ScreenSetupController,
    ScreenController,
    PuzzleGridController,
    PuzzleSequenceController,
    PrefersColorSchemeController
}) {
    const GameCoreControllers = {
        ScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenController,
        PuzzleSequenceController,
        PuzzleGridController
    };

    selectPuzzleGrid({ PuzzleGridController });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectPlayScreen,
        updateScreenMode: () => {
            const { id: puzzleId } = PuzzleGridController.puzzle;

            if (!puzzleId) {
                return;
            }

            ScreenSetupController.setup(ScreenController.transitionTo({
                screenId: GAME_SCREEN_PLAY,
                GameCoreControllers,
                gameModeFunctionality: () => { return { puzzleId }; }
            }));
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.setup(ScreenController.transitionTo({
                screenId: GAME_SCREEN_START,
                GameCoreControllers
            }));
        }
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { uiPracticeFunctionality };
