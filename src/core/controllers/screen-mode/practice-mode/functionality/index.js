import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';
import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function practiceModeFunctionality({
    GameModeController,
    ScreenSetupController,
    ScreenModeController,
    PuzzleGridController,
    PrefersColorSchemeController
}) {
    selectPuzzleGrid({ PuzzleGridController });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.modes[START_SCREEN]());
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectPlayScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.modes[PLAY_SCREEN]());
        }
    });


    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
