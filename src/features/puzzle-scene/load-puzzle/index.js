async function loadPuzzle({ puzzleId }) {
    try {
        const { [puzzleId]: puzzle } = await import('@shared-constants/puzzle-collection.js');

        if (!puzzle) {
            throw new Error(`Puzzle with id ${puzzleId} not found`);
        }

        return { puzzle };
    } catch (error) {
        console.error('Error loading puzzle: ', error);
    }
}

export { loadPuzzle };
