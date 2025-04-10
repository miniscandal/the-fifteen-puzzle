import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';

import { createPermutation } from '@shared-utils/game-state-generate';


function updateDOMElementWithGrid(containerId, gridHTML) {
    const container = document.getElementById(containerId);

    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(gridHTML, 'text/html');
    const newChild = parsedDoc.body.firstElementChild;
    const oldChild = container.firstElementChild;

    container.replaceChild(newChild, oldChild);
}

function renderPuzzleScene({ puzzle }) {
    const mainGridHTML = PuzzleGrid({
        size: 'medium',
        gameActive: true,
        puzzle,
    });

    updateDOMElementWithGrid(PUZZLE_GAME_ID, mainGridHTML);

    const helperGridHTML = PuzzleGrid({
        size: 'small',
        puzzle: {
            ...puzzle,
            state: createPermutation(),
        },
    });

    updateDOMElementWithGrid(PUZZLE_HELPER_GAME_ID, helperGridHTML);
}

export { renderPuzzleScene };
