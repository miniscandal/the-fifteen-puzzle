import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';
import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function startModeFunctionality(coreObjects) {
    const { GameModeController, PuzzleGridController } = coreObjects;

    configureColorSchemePreference(coreObjects.PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPlayScreen,
        screenMode: PLAY_SCREEN,
        updateScreenMode
    });

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPracticeScreen,
        screenMode: PRACTICE_SCREEN,
        updateScreenMode
    });

    GameModeController.currentMode = GAME_MODE_SEQUENCE;

    if (PuzzleGridController) {
        PuzzleGridController.puzzle.id = undefined;
    }
}

export { startModeFunctionality };
