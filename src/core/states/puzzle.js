function createPuzzleState({ id, targetSolution, playerSolution, permutation }) {
    let solved = false;
    let movableTiles = [];

    return {
        id,
        targetSolution,
        playerSolution,
        permutation,

        isSolved: () => solved,

        get movableTileIndices() {
            return [...movableTiles];
        },

        set movableTileIndices(tiles) {
            movableTiles = [...tiles];
        },

        reset: () => {
            solved = false;
            movableTiles = [];
        },

        properties: () => ({
            id,
            targetSolution: [...targetSolution],
            playerSolution: [...playerSolution],
            permutation: [...permutation],
            movableTileIndices: [...movableTiles]
        })
    };
}

export { createPuzzleState };
