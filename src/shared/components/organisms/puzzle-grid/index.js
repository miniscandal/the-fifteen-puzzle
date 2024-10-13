import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle';
import { GRID_COLUMN } from '@shared-constants/puzzle';

import './style.css';

function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    puzzle = {
        id: undefined,
        permutation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: '',
        getMovableTileIndices: [],
        enabled: true
    },
    puzzleTile = {
        id: undefined,
        symbol: undefined,
        size: 'auto',
        playEnabled: false,
        movementDirection: undefined,
        row: undefined,
        column: undefined,
        index: undefined
    }
}) {
    const { id, permutation, getMovableTileIndices } = puzzle;
    const puzzleTiles = permutation.map((value, index) => {
        const movableTile = getMovableTileIndices.find(tile => tile.index === index);

        const item = PuzzleTile({
            id: value,
            symbol: value,
            size: 'auto',
            playEnabled: !!movableTile,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index,
            ...'puzzleTile' in arguments[0] ? puzzleTile : {},
        });

        return item;
    });

    return (
        `
        <section
            class="puzzle-grid"
            id="grid-frame-four-by-four"
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-puzzle-id=${id}
        >
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { PuzzleGrid };
