import { TOTAL_TILES } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';

import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';

function getAdjacentTileIndicesInGrid(emptyIndex) {
    const movableTiles = [];

    // Check if two indices of the tiles are in the same row
    const areInSameRow = (indexOne, indexTwo) => {
        return Math.floor(indexOne / TILES_PER_ROW) === Math.floor((indexTwo) / TILES_PER_ROW);
    };

    // Check if the tile to the left is selectable
    if (emptyIndex - MOVEMENT_DISTANCE >= FIRST_TILE_INDEX && areInSameRow(emptyIndex, emptyIndex - MOVEMENT_DISTANCE)) {
        movableTiles.push({
            index: emptyIndex - MOVEMENT_DISTANCE,
            movementDirection: 'right'
        });
    }

    // Check if the tile to the right is selectable
    if (emptyIndex + MOVEMENT_DISTANCE < TOTAL_TILES && areInSameRow(emptyIndex, emptyIndex + MOVEMENT_DISTANCE)) {
        movableTiles.push({
            index: emptyIndex + MOVEMENT_DISTANCE,
            movementDirection: 'left'
        });
    }

    // Check if the down tile is selectable
    if (emptyIndex - TILES_PER_ROW >= FIRST_TILE_INDEX) {
        movableTiles.push({
            index: emptyIndex - TILES_PER_ROW,
            movementDirection: 'down'
        });
    }

    // check if the up tile is selectable
    if (emptyIndex + TILES_PER_ROW < TOTAL_TILES) {
        movableTiles.push({
            index: emptyIndex + TILES_PER_ROW,
            movementDirection: 'up'
        });
    }

    return movableTiles;
}

function findAdjacentTileIndices(permutation) {
    const emptyIndex = permutation.findIndex(value => value === EMPTY_TILE_VALUE);

    return getAdjacentTileIndicesInGrid(emptyIndex);
}

export { findAdjacentTileIndices, getAdjacentTileIndicesInGrid };
