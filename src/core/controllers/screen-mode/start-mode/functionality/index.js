import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';
import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function startModeFunctionality({
    GameModeController,
    PuzzleGridController,
    ScreenSetupController,
    ScreenModeController,
    PrefersColorSchemeController
}) {
    const coreControllers = {
        ScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenModeController,
        PuzzleGridController
    };

    GameModeController.currentMode = GAME_MODE_SEQUENCE;
    PuzzleGridController.puzzle.id = null;
    ScreenModeController.clearModeHistory();

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPlayScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.transitionTo({
            modeId: GAME_SCREEN_PLAY,
            coreControllers
        }));
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {
        ScreenSetupController.routine(ScreenModeController.transitionTo({
            modeId: GAME_SCREEN_PRACTICE,
            coreControllers
        }));
    });
}

export { startModeFunctionality };
