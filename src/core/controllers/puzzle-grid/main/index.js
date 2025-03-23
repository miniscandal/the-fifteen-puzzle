const PuzzleGridController = {
    puzzle: {
        id: undefined,
        permutation: [],
        state: [],
        solved: false
    },
    updateState(index) {
        const stateCopy = [...this.puzzle.state];
        const zeroIndex = this.puzzle.state.indexOf(0);
        [stateCopy[zeroIndex], stateCopy[index]] = [stateCopy[index], stateCopy[zeroIndex]];

        this.puzzle.state = stateCopy;

        console.log(this.puzzle);
    }
};

export { PuzzleGridController };
