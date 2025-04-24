function getMovableAdjacentTileIndices({
    positionInGrid,
    firstTileIndex,
    tilesPerRow,
    tileMoveUp,
    tileMoveDown,
    tileMoveLeft,
    tileMoveRight,
    movementDistance
}) {
    const { index, row, column } = positionInGrid;
    const adjacentIndices = [];
    const pushIndex = (index, movementDirection) => adjacentIndices.push({
        index,
        movementDirection
    });

    if (row > firstTileIndex) {
        pushIndex(index - tilesPerRow, tileMoveDown);
    }

    if (row < tilesPerRow - movementDistance) {
        pushIndex(index + tilesPerRow, tileMoveUp);
    }

    if (column > firstTileIndex) {
        pushIndex(index - movementDistance, tileMoveRight);
    }

    if (column < tilesPerRow - movementDistance) {
        pushIndex(index + movementDistance, tileMoveLeft);
    }

    return adjacentIndices;
}

export { getMovableAdjacentTileIndices };
