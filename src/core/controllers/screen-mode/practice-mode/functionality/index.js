import { GameModeController } from '@core-controllers/game-mode/main';

import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { selectPuzzleGrid } from '@feat-puzzle-scene/select-puzzle-grid';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { PLAY_SCREEN, START_SCREEN } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function practiceModeFunctionality(coreObjects) {
    prefersColorScheme(coreObjects.PrefersColorSchemeController);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN
    });

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPlayScreen,
        screenMode: PLAY_SCREEN
    });

    selectPuzzleGrid();

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { practiceModeFunctionality };
