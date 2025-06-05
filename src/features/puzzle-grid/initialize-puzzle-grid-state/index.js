import { basicTestShuffle } from '@feat-puzzle-grid/basic-test-shuffle';


async function initializePuzzleGridState({
    PuzzleGridStateController,
    PuzzleGridShuffling,
    PuzzleGridTiles,
    PuzzleGridFactory,
    createPuzzleState,
    puzzleId
}) {
    const { generateSolvedPuzzleState, loadPuzzleById } = PuzzleGridStateController;
    const { shuffleFromSolvedState } = PuzzleGridShuffling;
    const { getTilesMovableToEmpty, getGridPositionFromIndex, getMovableAdjacentTileIndices } = PuzzleGridTiles;

    const targetSolution = generateSolvedPuzzleState();
    // const playerSolution = shuffleFromSolvedState(targetSolution);
    const playerSolution = basicTestShuffle(targetSolution);

    const PuzzleState = await PuzzleGridFactory({
        id: puzzleId,
        targetSolution,
        loadPuzzleById,
        createPuzzleState
    });

    PuzzleState.playerSolution = playerSolution;

    PuzzleState.movableTileIndices = getTilesMovableToEmpty({
        solution: playerSolution,
        permutation: PuzzleState.permutation,
        getGridPositionFromIndex,
        getMovableAdjacentTileIndices,
    });


    return PuzzleState;
}

export { initializePuzzleGridState };
