import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';
import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function startModeFunctionality({
    GameModeController,
    PuzzleGridController,
    ScreenSetupController,
    ScreenModeController,
    PrefersColorSchemeController
}) {
    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPlayScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[PLAY_SCREEN]());
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.modes[PRACTICE_SCREEN]());
    });

    GameModeController.currentMode = GAME_MODE_SEQUENCE;
    PuzzleGridController.puzzle.id = undefined;
    ScreenModeController.clearModeHistory();
}

export { startModeFunctionality };
