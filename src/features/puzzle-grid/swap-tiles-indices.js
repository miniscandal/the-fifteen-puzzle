function swapTileIndices({ solution, selectedTileIndex, emptyTileIndex }) {
    const stateCopy = [...solution];

    [stateCopy[emptyTileIndex], stateCopy[selectedTileIndex]] = [stateCopy[selectedTileIndex], stateCopy[emptyTileIndex]];


    return stateCopy;
}

export { swapTileIndices };
