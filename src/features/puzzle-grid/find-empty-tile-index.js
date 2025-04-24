function findEmptyTileIndex(items, emptyTileValue) {

    return items.findIndex(value => value === emptyTileValue);
}

export { findEmptyTileIndex };
