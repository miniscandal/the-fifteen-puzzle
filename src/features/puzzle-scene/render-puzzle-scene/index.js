import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridGamePlay } from '@shared-components/organisms/puzzle-grid/variants';

import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';


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
