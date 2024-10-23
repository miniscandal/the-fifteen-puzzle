import { calculateTilePosition } from '@feat-puzzle-grid/calculate-tile-position';

import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';

/**
 * Find the index of the empty tile in the given tilesValues array
 * and calculate its corresponding row and column in the grid.
 */


function findEmptyValue(tileValues) {
    const index = tileValues.findIndex(value => value === EMPTY_TILE_VALUE);
    const emptyTilePosition = {
        index,
        ...calculateTilePosition(index)
    };

    return emptyTilePosition;
}

export { findEmptyValue };
