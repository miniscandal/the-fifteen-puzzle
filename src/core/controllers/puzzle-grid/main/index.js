const PuzzleGridController = {
    generateSolvedPuzzleState: (maxTiles) => Array.from({ length: maxTiles + 1 }, (_, index) => index),

    generateShuffleSimplePuzzleState: (permutation) => {
        const shuffled = [...permutation];
        const a = shuffled[0];
        shuffled[0] = shuffled[1];
        shuffled[1] = a;


        return shuffled;
    },

    generateShufflePuzzleState: (permutation) => {
        const shuffled = [...permutation];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }


        return shuffled;
    }
};

export { PuzzleGridController };
