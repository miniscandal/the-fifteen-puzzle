import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';

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

    domElementButtonSelectStartScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[START_SCREEN]());
    });

    domElementButtonSelectPlayScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[PLAY_SCREEN]());
    });

    domElementButtonSelectBackScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[ScreenModeController.lastModeHistory()]());
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
