async function PuzzleGridFactory({ puzzleId, loadPuzzle, state }) {
    let solved = false;
    let movableTileIndices = [];

    const { puzzle } = await loadPuzzle({ id: puzzleId });

    const permutation = puzzle.permutation;

    const properties = () => {

        return {
            id: puzzleId,
            permutation,
            state,
            solved,
            movableTileIndices
        };
    };


    return {
        get id() { return puzzleId; },
        get movableTileIndices() { return movableTileIndices; },
        set movableTileIndices(tiles) { movableTileIndices = tiles; },
        get permutation() { return permutation; },
        properties
    };
}

export { PuzzleGridFactory };
