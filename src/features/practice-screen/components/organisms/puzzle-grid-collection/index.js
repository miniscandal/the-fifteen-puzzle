import { puzzleGridPractice } from '@shared-components/organisms/puzzle-grid/variants';
import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GRID_COLLECTION_ID } from './logic/constants/element-identifiers';

import './style.css';

function PuzzleGridCollection({ puzzles = [] }) {
    const puzzleGrids = Object.values(puzzles).map(puzzle => {
        if (!puzzle.enabled) {
            return;
        }

        const puzzleGrid = PuzzleGrid({
            ...puzzleGridPractice,
            puzzle
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
