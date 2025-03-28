import { SELECT_GAME_SCREEN_PLAY_ID } from '@shared-constants/dom-element-identifiers';

import { PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';

function selectPuzzleGrid({ PuzzleGridController }) {
    const button = document.getElementById(PUZZLE_GRID_COLLECTION_ID);

    button.addEventListener('click', function (event) {
        const attribute = 'data-puzzle-id';
        const puzzleGrid = event.target.closest(`[${attribute}]`);

        if (!puzzleGrid) {
            return;
        }

        const currentPuzzleGridSelected = document.querySelector(`[${attribute}][class~="selected"]`);
        currentPuzzleGridSelected?.classList.remove('selected');

        const puzzleId = puzzleGrid.dataset.puzzleId;

        PuzzleGridController.puzzle.id = puzzleId;

        puzzleGrid.classList.add('selected');

        document.getElementById(SELECT_GAME_SCREEN_PLAY_ID).classList.add('enabled');
    });
};

export { selectPuzzleGrid };
