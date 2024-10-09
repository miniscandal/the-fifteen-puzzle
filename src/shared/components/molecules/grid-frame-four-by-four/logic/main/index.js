import { updateGameState } from '@shared-helpers/update-game-state';
import { updateSelectableTiles } from '@shared-helpers/update-selectable-tiles';
import { swapTilesData } from '@shared-helpers/swap-tiles-data';
import { isSelectableTile, resetSelectableTiles } from '@shared-helpers/selectable-tiles';
import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';

function gridFramFourByFour(event, Game) {
    const currentTile = event.target;

    if (!isSelectableTile(currentTile)) {
        return;
    }

    const tiles = document.querySelectorAll('[data-selectable="true"]');
    resetSelectableTiles(tiles);

    const emptyTile = document.querySelector('[data-id="0"]');
    swapTilesData(currentTile, emptyTile);

    const movableTileIndices = getMovableTileIndices(Number(emptyTile.dataset.index));
    updateSelectableTiles(movableTileIndices);

    updateGameState(Game, currentTile, emptyTile);
}

export { gridFramFourByFour };
