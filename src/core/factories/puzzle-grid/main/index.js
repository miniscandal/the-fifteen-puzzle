import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';


async function PuzzleGridFactory({ PuzzleGridController, puzzleId, loadPuzzle }) {
    let solved = false;
    let movableTileIndices = [];

    const solution = PuzzleGridController.generateSolvedPuzzleState(MAX_TILES);
    let state = PuzzleGridController.generateShufflePuzzleState(solution);

    const { puzzle } = await loadPuzzle({ id: puzzleId });

    const permutation = puzzle.permutation;

    const properties = () => {

        return {
            id: puzzleId,
            permutation,
            state,
            solved,
            movableTileIndices: PuzzleGridController.getMovableTileIndices(state, permutation)
        };
    };


    return {
        get id() { return puzzleId; },
        get movableTileIndices() { return movableTileIndices; },
        properties
    };
}

export { PuzzleGridFactory };
