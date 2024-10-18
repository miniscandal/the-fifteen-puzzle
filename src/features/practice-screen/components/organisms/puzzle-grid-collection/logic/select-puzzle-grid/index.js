import { SELECT_PLAY_SCREEN_ID } from '@feature-start-screen/components/molecules/navigation/logic/constants/element-identifiers';
import { PUZZLE_GRID_COLLECTION_ID } from '../constants/element-identifiers';

function selectPuzzleGrid({ Game }) {
    const button = document.getElementById(PUZZLE_GRID_COLLECTION_ID);

    button.addEventListener('click', function (event) {
        const attribute = 'data-puzzle-id';
        const puzzleGrid = event.target.closest(`[${attribute}]`);

        if (!puzzleGrid) {
            return;
        }

        const { puzzle } = Game;
        const className = 'selected';
        const selector = `[${attribute}=${puzzle.id}]`;
        const previousPuzzleGrid = document.querySelector(selector);

        previousPuzzleGrid?.classList.remove(className);
        puzzleGrid.classList.add(className);

        puzzle.id = puzzleGrid.dataset.puzzleId;

        document.getElementById(SELECT_PLAY_SCREEN_ID).classList.add('enabled');

    });
};

export { selectPuzzleGrid };
