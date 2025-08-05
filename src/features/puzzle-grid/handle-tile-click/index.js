function handleTileClick({ PuzzleState, PuzzleGridTilesController, selectedTile, emptyTile }) {
    const playerSolution = PuzzleGridTilesController.swapTileIndices({
        solution: PuzzleState.playerSolution,
        selectedTileIndex: selectedTile.dataset.index,
        emptyTileIndex: Number(emptyTile.dataset.index)
    });

    const movableTileIndices = PuzzleGridTilesController.getTilesMovableToEmpty({
        solution: playerSolution,
        permutation: PuzzleState.permutation,
        getGridPositionFromIndex: PuzzleGridTilesController.getGridPositionFromIndex,
        getMovableAdjacentTileIndices: PuzzleGridTilesController.getMovableAdjacentTileIndices
    });


    return {
        playerSolution,
        movableTileIndices
    };
}

export { handleTileClick };
