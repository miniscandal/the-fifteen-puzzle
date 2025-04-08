const PuzzleGridController = {
    puzzle: {
        id: undefined,
        permutation: [],
        state: [],
        solved: false
    },
    checkState(puzzleState = []) {
        const isSolved = puzzleState.every((num, index) => num === index);
        this.puzzle.solved = isSolved;

        return isSolved;
    },
    updateState(index, zeroIndex) {
        const stateCopy = [...this.puzzle.state];

        [stateCopy[zeroIndex], stateCopy[index]] = [stateCopy[index], stateCopy[zeroIndex]];
        this.puzzle.state = stateCopy;

        return stateCopy;
    }
};

export { PuzzleGridController };
