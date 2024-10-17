import { canSelectTile } from '@shared-components/molecules/puzzle-tile/logic/can-select-tile';
import { resetSelectableTiles } from '@shared-components/molecules/puzzle-tile/logic/reset-selectable-tiles';
import { swapTilesData } from '@shared-components/molecules/puzzle-tile/logic/swap-tiles-data';
import { getAdjacentTileIndicesInGrid } from '../get-adjacent-tile-indices-in-grid';
import { updateSelectableTiles } from '@shared-components/molecules/puzzle-tile/logic/update-selectable-tiles';
import { updateGameState } from '../update-game-state';


function puzzleGrid({ Game }) {
    const puzzleGrid = document.getElementById('puzzle-grid');

    puzzleGrid.addEventListener('click', function (event) {
        const element = event.target;

        if (!canSelectTile(element)) {
            return;
        }

        const tiles = document.querySelectorAll('[data-play-enabled="true"][data-symbol]');

        resetSelectableTiles(tiles);

        const currentTile = element;
        const emptyTile = document.querySelector('[data-id="0"]');

        swapTilesData(currentTile, emptyTile);
        updateGameState(Game, currentTile, emptyTile);

        const movableTileIndices = getAdjacentTileIndicesInGrid(Number(emptyTile.dataset.index));

        updateSelectableTiles(movableTileIndices);
    });
}

export { puzzleGrid };
