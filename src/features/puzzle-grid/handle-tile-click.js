function handleTileClick({ selectedTile, emptyTile, puzzle }) {
    const emptyTileIndex = Number(emptyTile.dataset.index);

    const solution = this.updateState({
        solution: puzzle.solution,
        selectedIndex: selectedTile.dataset.index,
        zeroIndex: emptyTileIndex
    });

    puzzle.solution = solution;

    const movableTileIndices = this.getMovableTileIndices({
        solution,
        permutation: puzzle.permutation
    });

    console.log(puzzle);

    const { isSolved } = puzzle;

    if (isSolved) {
        console.log(isSolved);
    }


    return {
        movableTileIndices
    };
}

export { handleTileClick };
