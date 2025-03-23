import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridGamePlay } from '@shared-components/organisms/puzzle-grid/variants';

import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { shuffleArray } from '@shared-constants/puzzle-collection';
import { getAdjacentIndicesInGrid } from '@shared-utils/get-adjacent-indices-in-grid';
import { getItemPositionInGrid } from '@shared-utils/get-item-position-in-grid';


function renderPuzzleScene({ puzzle }) {
    const state = shuffleArray(puzzle.permutation);

    const puzzleGrid = PuzzleGrid({
        ...puzzleGridGamePlay,
        puzzle: {
            ...puzzle,
            state,
            movableTileIndices: getAdjacentIndicesInGrid(getItemPositionInGrid(state))
        }
    });
    const puzzleGame = document.getElementById(PUZZLE_GAME_ID);
    const parser = new DOMParser();
    const node = parser.parseFromString(puzzleGrid, 'text/html');
    const newChild = node.body.firstElementChild;
    const oldChild = puzzleGame.firstElementChild;

    puzzleGame.replaceChild(newChild, oldChild);
}

export { renderPuzzleScene };
