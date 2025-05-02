async function initializePuzzleGridState({
    PuzzleGridState,
    PuzzleGridShuffling,
    PuzzleGridTiles,
    PuzzleGridFactory,
    createPuzzleState,
    puzzleId
}) {
    const { generateSolvedPuzzleState, loadPuzzleById } = PuzzleGridState;
    const { shuffleFromSolvedState } = PuzzleGridShuffling;
    const { getTilesMovableToEmpty, getGridPositionFromIndex, getMovableAdjacentTileIndices } = PuzzleGridTiles;

    const targetSolution = generateSolvedPuzzleState();
    const playerSolution = shuffleFromSolvedState(targetSolution);

    const PuzzleState = await PuzzleGridFactory({
        id: puzzleId,
        targetSolution,
        playerSolution,
        loadPuzzleById,
        createPuzzleState
    });

    PuzzleState.movableTileIndices = getTilesMovableToEmpty({
        solution: playerSolution,
        permutation: PuzzleState.permutation,
        getGridPositionFromIndex,
        getMovableAdjacentTileIndices,
    });


    return PuzzleState;
}

export { initializePuzzleGridState };
