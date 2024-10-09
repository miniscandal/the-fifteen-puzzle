import { updateGameState } from '@shared-helpers/update-game-state';
import { updateSelectableTiles } from '@shared-components/molecules/puzzle-tile/logic/update-selectable-tiles';
import { swapTilesData } from '@shared-components/molecules/puzzle-tile/logic/swap-tiles-data';
import { isSelectableTile, resetSelectableTiles } from '@shared-components/molecules/puzzle-tile/logic/selectable-tiles';
import { getAdjacentTileIndicesInGrid } from '@shared-components/molecules/puzzle-tile/logic/get-adjacent-tile-indices-in-grid';

function gridFramFourByFour(event, Game) {
    const currentTile = event.target;

    if (!isSelectableTile(currentTile)) {
        return;
    }

    const tiles = document.querySelectorAll('[data-selectable="true"]');
    resetSelectableTiles(tiles);

    const emptyTile = document.querySelector('[data-id="0"]');
    swapTilesData(currentTile, emptyTile);

    const movableTileIndices = getAdjacentTileIndicesInGrid(Number(emptyTile.dataset.index));
    updateSelectableTiles(movableTileIndices);

    updateGameState(Game, currentTile, emptyTile);
}

export { gridFramFourByFour };
