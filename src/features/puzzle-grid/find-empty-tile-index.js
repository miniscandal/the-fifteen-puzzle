import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';


function findEmptyTileIndex(items) {

    return items.findIndex(value => value === EMPTY_TILE_VALUE);
}

export { findEmptyTileIndex };
