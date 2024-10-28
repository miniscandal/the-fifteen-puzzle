import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';
import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { PLAY_SCREEN, START_SCREEN } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function practiceModeFunctionality(coreObjects) {
    const { GameModeController } = coreObjects;

    configureColorSchemePreference(coreObjects.PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN,
        updateScreenMode
    });

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPlayScreen,
        screenMode: PLAY_SCREEN,
        updateScreenMode
    });

    selectPuzzleGrid({ PuzzleGridController });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
