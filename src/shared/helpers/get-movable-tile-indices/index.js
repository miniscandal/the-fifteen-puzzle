const areInSameRow = (indexOne, indexTwo) => {
    return Math.floor(indexOne / 4) === Math.floor((indexTwo) / 4);
};

function getMovableTileIndices(emptyTileIndex) {
    const movableTiles = [];

    if (emptyTileIndex - 1 >= 0 && areInSameRow(emptyTileIndex, emptyTileIndex - 1)) {
        movableTiles.push(emptyTileIndex - 1);
    }

    if (emptyTileIndex + 1 <= 15 && areInSameRow(emptyTileIndex, emptyTileIndex + 1)) {
        movableTiles.push(emptyTileIndex + 1);
    }

    if (emptyTileIndex - 4 >= 0) {
        movableTiles.push(emptyTileIndex - 4);
    }

    if (emptyTileIndex + 4 <= 15) {
        movableTiles.push(emptyTileIndex + 4);
    }

    return movableTiles;
}

export { getMovableTileIndices };
