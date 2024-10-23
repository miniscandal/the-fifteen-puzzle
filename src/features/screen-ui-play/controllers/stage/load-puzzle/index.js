import { STAGE_SEQUENCE } from '@feat-screen-ui-play/constants/stage-sequence';

async function loadPuzzle({ PuzzleGridController, renderPuzzleScene, selectPuzzleTile }) {
    try {
        const id = PuzzleGridController.puzzle.id ?? STAGE_SEQUENCE[0];
        const { [id]: puzzle } = await import('@shared-constants/puzzle-collection.js');

        renderPuzzleScene({ puzzle });
        selectPuzzleTile({ PuzzleGridController });

        PuzzleGridController.puzzle.id = id;
    } catch (error) {
        console.log(error);
    }
}

export { loadPuzzle };
