import { validateSelectableTile } from '@feat-puzzle-grid/validate-selectable-tile';
import { resetSelectableTiles } from '@feat-puzzle-grid/reset-selectable-tiles';
import { swapTilesData } from '@feat-puzzle-grid/swap-tiles-data';
import { getAdjacentTileIndicesInGrid } from '../get-adjacent-tile-indices-in-grid';
import { updateSelectableTiles } from '@feat-puzzle-grid/update-selectable-tiles';
import { updateGameState } from '../update-game-state';


function puzzleGrid({ GameController }) {
    const puzzleGrid = document.getElementById('puzzle-grid');

    puzzleGrid.addEventListener('click', function (event) {
        const element = event.target;

        if (!validateSelectableTile(element)) {
            return;
        }

        const tiles = document.querySelectorAll('[data-play-enabled="true"][data-symbol]');

        resetSelectableTiles(tiles);

        const currentTile = element;
        const emptyTile = document.querySelector('[data-id="0"]');

        swapTilesData(currentTile, emptyTile);
        updateGameState(GameController, currentTile, emptyTile);

        const movableTileIndices = getAdjacentTileIndicesInGrid(Number(emptyTile.dataset.index));

        updateSelectableTiles(movableTileIndices);
    });
}

export { puzzleGrid };
