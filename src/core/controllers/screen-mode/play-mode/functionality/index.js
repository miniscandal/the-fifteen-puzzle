import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { loadPuzzle } from '@feat-screen-ui-play/controllers/stage/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { isInitializedGameMode } from '@feat-game-mode/management-sequence-mode';

import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';
import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';


async function playModeFunctionality(coreObjects) {
    prefersColorScheme(coreObjects.PrefersColorSchemeController);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN
    });

    const currentMode = isInitializedGameMode(GameModeController);

    const idPuzzle = GameModeController.modes[currentMode]({ PuzzleGridController });

    const puzzle = await loadPuzzle({ idPuzzle, renderPuzzleScene, selectPuzzleTile });

    renderPuzzleScene({ puzzle });
    selectPuzzleTile();
}

export { playModeFunctionality };
