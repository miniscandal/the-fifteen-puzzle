function getGridPositionFromIndex({ emptyTileIndex, tilesPerRow, tilesPerColumn }) {
    const position = {
        row: Math.floor(emptyTileIndex / tilesPerRow),
        column: emptyTileIndex % tilesPerColumn
    };


    return position;
}

export { getGridPositionFromIndex };
