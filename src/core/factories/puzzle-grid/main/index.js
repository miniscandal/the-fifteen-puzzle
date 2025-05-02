async function PuzzleGridFactory({
    id,
    targetSolution,
    playerSolution,
    loadPuzzleById,
    createPuzzleState
}) {
    const { puzzle } = await loadPuzzleById({ id });


    return createPuzzleState({
        targetSolution,
        playerSolution,
        ...puzzle
    });
}

export { PuzzleGridFactory };
