import { STAGE_SEQUENCE } from '@core-constants/stage-sequence';

async function loadPuzzle({ Game, renderPuzzleScene }) {
    try {
        const id = Game.puzzle.id ?? STAGE_SEQUENCE[0];
        const { [id]: puzzle } = await import('@core-constants/puzzles.js');

        renderPuzzleScene({ puzzle });

        Game.puzzle.id = id;

    } catch (error) {
        console.log(error);
    }
}

export { loadPuzzle };
