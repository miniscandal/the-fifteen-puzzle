import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
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

    domElementButtonSelectStartScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[GAME_SCREEN_START]());
    });

    domElementButtonSelectPlayScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[GAME_SCREEN_PLAY]());
    });

    domElementButtonSelectBackScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[ScreenModeController.lastModeHistory()]());
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
