import { PUZZLE_GRID_COLLECTION_ID } from '../constants/element-identifiers';

function selectPuzzleGrid({ Game }) {
    const button = document.getElementById(PUZZLE_GRID_COLLECTION_ID);

    button.addEventListener('click', function (event) {
        if (!event.target || !event.target.getAttribute('data-puzzle-id')) {
            return;
        }

        Game.puzzle.id = event.target.getAttribute(['data-puzzle-id']);

        console.log(Game.puzzle.id);

    });
};

export { selectPuzzleGrid };
