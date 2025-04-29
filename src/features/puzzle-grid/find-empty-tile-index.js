import { CONFIG_PUZZLE_GRID_EMPTY_TILE_VALUE } from '@shared-constants/config-puzzle-grid';


function findEmptyTileIndex(items) {

    return items.findIndex(value => value === CONFIG_PUZZLE_GRID_EMPTY_TILE_VALUE);
}

export { findEmptyTileIndex };
