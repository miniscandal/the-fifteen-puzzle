import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { gameModeManagement } from '@feat-game-mode/game-mode-management';
import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';

import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';


async function playModeFunctionality(coreObjects) {
    const { PrefersColorSchemeController, GameModeController, PuzzleGridController } = coreObjects;
    const gameMode = gameModeManagement({ GameModeController });
    const idPuzzle = GameModeController.modes[gameMode]({ PuzzleGridController });
    const puzzle = await loadPuzzle({ idPuzzle, renderPuzzleScene, selectPuzzleTile });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN,
        updateScreenMode
    });

    renderPuzzleScene({ puzzle });
    selectPuzzleTile();
}

export { playModeFunctionality };
