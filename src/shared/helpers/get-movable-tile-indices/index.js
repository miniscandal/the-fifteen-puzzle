import { TOTAL_TILES } from '@shared-constants/puzzle';
import { TILES_PER_ROW } from '@shared-constants/puzzle';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle';

function getMovableTileIndices(emptyTileIndex) {
    const movableTiles = [];

    // Check if two indices of the tiles are in the same row
    const areInSameRow = (indexOne, indexTwo) => {
        return Math.floor(indexOne / TILES_PER_ROW) === Math.floor((indexTwo) / TILES_PER_ROW);
    };

    // Check if the tile to the left is selectable
    if (emptyTileIndex - MOVEMENT_DISTANCE >= FIRST_TILE_INDEX && areInSameRow(emptyTileIndex, emptyTileIndex - MOVEMENT_DISTANCE)) {
        movableTiles.push({
            index: emptyTileIndex - MOVEMENT_DISTANCE,
            movementDirection: 'left'
        });
    }

    // Check if the tile to the right is selectable
    if (emptyTileIndex + MOVEMENT_DISTANCE < TOTAL_TILES && areInSameRow(emptyTileIndex, emptyTileIndex + MOVEMENT_DISTANCE)) {
        movableTiles.push({
            index: emptyTileIndex + MOVEMENT_DISTANCE,
            movementDirection: 'right'
        });
    }

    // Check if the upper tile is selectable
    if (emptyTileIndex - TILES_PER_ROW >= FIRST_TILE_INDEX) {
        movableTiles.push({
            index: emptyTileIndex - TILES_PER_ROW,
            movementDirection: 'down'
        });
    }

    // check if the lower tile is selectable
    if (emptyTileIndex + TILES_PER_ROW < TOTAL_TILES) {
        movableTiles.push({
            index: emptyTileIndex + TILES_PER_ROW,
            movementDirection: 'up'
        });
    }

    return movableTiles;
}

export { getMovableTileIndices };
