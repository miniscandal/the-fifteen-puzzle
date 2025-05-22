function handleTileClick({ PuzzleState, PuzzleGridTiles, selectedTile, emptyTile }) {
    const { isSolved } = PuzzleState;

    const playerSolution = PuzzleGridTiles.swapTileIndices({
        solution: PuzzleState.playerSolution,
        selectedTileIndex: selectedTile.dataset.index,
        emptyTileIndex: Number(emptyTile.dataset.index)
    });

    const movableTileIndices = PuzzleGridTiles.getTilesMovableToEmpty({
        solution: playerSolution,
        permutation: PuzzleState.permutation,
        getGridPositionFromIndex: PuzzleGridTiles.getGridPositionFromIndex,
        getMovableAdjacentTileIndices: PuzzleGridTiles.getMovableAdjacentTileIndices
    });


    if (isSolved) {
        console.log(isSolved);
    }


    return {
        playerSolution,
        movableTileIndices
    };
}

export { handleTileClick };
