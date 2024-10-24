async function loadPuzzle({ idPuzzle }) {
    try {
        const { [idPuzzle]: puzzle } = await import('@shared-constants/puzzle-collection.js');

        return puzzle;
    } catch (error) {
        console.log(error);
    }
}

export { loadPuzzle };
