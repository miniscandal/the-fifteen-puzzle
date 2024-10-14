import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { STAGE_SEQUENCE } from '@core-constants/stage-sequence';

import { PUZZLE_GAME_ID } from '../constants/element-identifiers';

async function loadPuzzle({ Game, puzzleGridGamePlay }) {
    try {
        const id = Game.puzzle.id ?? STAGE_SEQUENCE[0];
        const { [id]: puzzle } = await import('@core-constants/puzzles.js');
        const puzzleGrid = PuzzleGrid({
            ...puzzleGridGamePlay,
            puzzle
        });
        const puzzleGame = document.getElementById(PUZZLE_GAME_ID);
        const parser = new DOMParser();
        const node = parser.parseFromString(puzzleGrid, 'text/html');
        const newChild = node.body.firstElementChild;
        const oldChild = puzzleGame.firstElementChild;

        puzzleGame.replaceChild(newChild, oldChild);

        Game.puzzle.id = id;
    } catch (error) {
        console.log(error);
    }
}

export { loadPuzzle };
