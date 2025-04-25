function handleTileClick({
    selectedTile,
    emptyTileIndex,
    puzzle,
    swapTileIndices,
    getTilesMovableToEmpty,
    getGridPositionFromIndex,
    getMovableAdjacentTileIndices
}) {
    const solution = swapTileIndices({
        solution: puzzle.solution,
        selectedIndex: selectedTile.dataset.index,
        zeroIndex: emptyTileIndex
    });

    puzzle.solution = solution;

    const movableTileIndices = getTilesMovableToEmpty({
        solution,
        permutation: puzzle.permutation,
        getGridPositionFromIndex: getGridPositionFromIndex,
        getMovableAdjacentTileIndices: getMovableAdjacentTileIndices
    });

    console.log(puzzle);

    const { isSolved } = puzzle;

    if (isSolved) {
        console.log(isSolved);
    }


    return {
        movableTileIndices
    };
}

export { handleTileClick };
