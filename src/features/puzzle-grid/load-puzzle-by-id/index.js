async function loadPuzzleById({ id }) {
    try {
        const { [id]: puzzle } = await import('@shared-constants/puzzle-collection');

        if (!puzzle) {
            throw new Error(`Puzzle with id ${id} not found`);
        }

        return { puzzle };
    } catch (error) {
        console.error('Error loading puzzle: ', error);
    }
}

export { loadPuzzleById };
