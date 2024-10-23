import { validateSelectableTile } from '@feat-puzzle-grid/validate-selectable-tile';
import { resetSelectableTiles } from '@feat-puzzle-grid/reset-selectable-tiles';
import { swapTilesData } from '@feat-puzzle-grid/swap-tiles-data';
import { updateSelectableTiles } from '@feat-puzzle-grid/update-selectable-tiles';
import { getMovableTileIndices } from '@feat-puzzle-grid/get-movable-tile-indices';

import { domElementTiles } from '@shared-dom-elements/data-attributes';
import { domElementEmptyTile } from '@shared-dom-elements/data-attributes';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';

import { updateGameState } from '../update-game-state';


function selectPuzzleTile({ PuzzleGridController }) {
    const puzzleGrid = domElementPuzzleGrid();

    puzzleGrid.addEventListener('click', function (event) {
        const selectedTile = event.target;

        if (!validateSelectableTile(selectedTile)) {
            return;
        }

        const emptyTile = domElementEmptyTile();

        resetSelectableTiles(domElementTiles());
        swapTilesData(selectedTile, emptyTile);
        updateSelectableTiles(getMovableTileIndices(emptyTile));
        updateGameState(PuzzleGridController, selectedTile, emptyTile);
    });
}

export { selectPuzzleTile };
