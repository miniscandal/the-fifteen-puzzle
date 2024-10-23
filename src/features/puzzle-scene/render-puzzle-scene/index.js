import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { puzzleGridGamePlay } from '@shared-components/organisms/puzzle-grid/variants';

function renderPuzzleScene({ puzzle }) {
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
}

export { renderPuzzleScene };
