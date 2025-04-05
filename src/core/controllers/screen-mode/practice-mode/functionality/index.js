import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectPlayScreen, domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY, GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function practiceModeFunctionality({
    GameModeController,
    ScreenSetupController,
    ScreenModeController,
    PuzzleGridController,
    PrefersColorSchemeController
}) {
    const coreGameControllers = {
        ScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenModeController,
        PuzzleGridController
    };

    selectPuzzleGrid({ PuzzleGridController });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectPlayScreen,
        updateScreenMode: () => {
            if (!PuzzleGridController.puzzle.id) {
                return;
            }

            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: GAME_SCREEN_PLAY,
                coreGameControllers
            }));
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: GAME_SCREEN_START,
                coreGameControllers
            }));
        }
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
