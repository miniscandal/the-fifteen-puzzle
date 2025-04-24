function swapTileIndices({ solution, selectedIndex, zeroIndex }) {
    const stateCopy = [...solution];

    [stateCopy[zeroIndex], stateCopy[selectedIndex]] = [stateCopy[selectedIndex], stateCopy[zeroIndex]];


    return stateCopy;
}

export { swapTileIndices };
