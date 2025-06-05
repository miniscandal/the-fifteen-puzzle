function createPuzzleState({ id, targetSolution, permutation }) {
    let solved = false;
    let movableTiles = [];
    let playerSolution = [];


    return {
        id,
        targetSolution,
        permutation,

        get isSolved() {
            return solved;
        },

        set isSolved(isSolved) {
            solved = isSolved;
        },

        get playerSolution() {
            return [...playerSolution];
        },

        set playerSolution(solution) {
            playerSolution = [...solution];
        },

        get movableTileIndices() {
            return [...movableTiles];
        },

        set movableTileIndices(tiles) {
            movableTiles = [...tiles];
        },

        reset: () => {
            solved = false;
            movableTiles = [];
            playerSolution = [];
        },

        properties: () => ({
            id,
            targetSolution: [...targetSolution],
            playerSolution: [...playerSolution],
            permutation: [...permutation],
            movableTileIndices: [...movableTiles],
        })
    };
}

export { createPuzzleState };
