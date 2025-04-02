import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function practiceModeFunctionality({
    GameModeController,
    ScreenSetupController,
    ScreenModeController,
    PuzzleGridController,
    PrefersColorSchemeController
}) {
    const coreControllers = {
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
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: GAME_SCREEN_PLAY,
                coreControllers
            }));
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectBackScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: ScreenModeController.lastModeHistory(),
                coreControllers
            }));
        }
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
