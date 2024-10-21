import { STAGE_SEQUENCE } from '@feat-screen-ui-play/constants/stage-sequence';

async function loadPuzzle({ GameController, renderPuzzleScene, puzzleGrid }) {
    try {
        const id = GameController.puzzle.id ?? STAGE_SEQUENCE[0];
        const { [id]: puzzle } = await import('@shared-constants/puzzle-collection.js');

        renderPuzzleScene({ puzzle });
        puzzleGrid({ GameController });

        GameController.puzzle.id = id;

    } catch (error) {
        console.log(error);
    }
}

export { loadPuzzle };
