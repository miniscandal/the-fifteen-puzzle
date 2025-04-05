import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PuzzleGridCollection({ puzzles = [] }) {
    const puzzleGrids = Object.values(puzzles).map(puzzle => {
        if (!puzzle.enabled) {
            return;
        }

        const puzzleGrid = PuzzleGrid({
            size: 'small',
            pendingSelection: true,
            puzzleTile: {
                playEnabled: false
            },
            puzzle: {
                ...puzzle,
                state: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                movableTileIndices: []
            }
        });


        return puzzleGrid;
    });


    return (
        `
        <section id=${PUZZLE_GRID_COLLECTION_ID} class="puzzle-grid-collection">
                ${puzzleGrids.join('')}
        </section>
        `
    );
}

export { PuzzleGridCollection };
