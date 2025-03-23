import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';
import { puzzleGridPractice } from '@shared-components/organisms/puzzle-grid/variants';

import { PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function PuzzleGridCollection({ puzzles = [] }) {
    const puzzleGrids = Object.values(puzzles).map(puzzle => {
        if (!puzzle.enabled) {
            return;
        }

        const puzzleGrid = PuzzleGrid({
            ...puzzleGridPractice,
            puzzle: {
                ...puzzle,
                state: puzzle.permutation,
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
