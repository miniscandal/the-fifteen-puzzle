async function PuzzleGridFactory({
    id,
    targetSolution,
    loadPuzzleById,
    createPuzzleState
}) {
    const { puzzle } = await loadPuzzleById({ id });


    return createPuzzleState({
        targetSolution,
        ...puzzle
    });
}

export { PuzzleGridFactory };
