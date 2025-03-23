import { validateSelectableTile } from '@feat-puzzle-grid/validate-selectable-tile';
import { resetSelectableTiles } from '@feat-puzzle-grid/reset-selectable-tiles';
import { swapTilesData } from '@feat-puzzle-grid/swap-tiles-data';
import { updateSelectableTiles } from '@feat-puzzle-grid/update-selectable-tiles';

import { domElementPlayEnabledTiles } from '@shared-dom-elements/data-attributes';
import { domElementEmptyTile } from '@shared-dom-elements/data-attributes';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';
import { getAdjacentIndicesInGrid } from '@shared-utils/get-adjacent-indices-in-grid';
import { calculateIndexPositionInGrid } from '@shared-utils/calculate-index-position-in-grid';


function selectPuzzleTile({ onSelectPuzzleTile }) {
    domElementPuzzleGrid().addEventListener('click', function (event) {
        const selectedTile = event.target;

        if (!validateSelectableTile(selectedTile)) {
            return;
        }

        const emptyTile = domElementEmptyTile();

        resetSelectableTiles(domElementPlayEnabledTiles());
        swapTilesData(selectedTile, emptyTile);


        const index = Number(emptyTile.dataset.index);
        const movableTileIndices = getAdjacentIndicesInGrid({
            index,
            ...calculateIndexPositionInGrid(index)
        });

        updateSelectableTiles(movableTileIndices);

        onSelectPuzzleTile(index);
    });
}

export { selectPuzzleTile };
