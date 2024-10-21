const PuzzleGridController = {
    puzzle: {
        id: undefined,
        permutation: [],
        state: [],
        solved: false,
        updateState: function ({ currentElement, emptyElement }) {
            const { id: currentId, index: currentIndex } = currentElement;
            const { id: emptyId, index: emptyIndex } = emptyElement;

            this.state[currentIndex] = currentId;
            this.state[emptyIndex] = emptyId;
        }
    },
};

export { PuzzleGridController };
