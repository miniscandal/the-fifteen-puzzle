async function loadPuzzle({ idPuzzle }) {
    try {
        const { [idPuzzle]: puzzle } = await import('@shared-constants/puzzle-collection.js');

        if (!puzzle) {
            throw new Error(`Puzzle with id ${idPuzzle} not found`);
        }

        return puzzle;
    } catch (error) {
        console.error('Error loading puzzle: ', error);
    }
}

export { loadPuzzle };
