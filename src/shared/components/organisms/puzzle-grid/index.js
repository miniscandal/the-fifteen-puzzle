import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle-grid-settings';
import { GRID_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { MOVE_RIGHT } from '@shared-constants/movement-direction';
import { MOVE_ABOVE } from '@shared-constants/movement-direction';

import './style.css';


function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    gameActive = false,
    puzzle = {
        id: undefined,
        permutation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: '',
        getMovableTileIndices: [
            { index: 1, movementDirection: MOVE_RIGHT },
            { index: 4, movementDirection: MOVE_ABOVE }
        ],
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

        return PuzzleTile({
            id: value,
            symbol: value,
            size: 'auto',
            playEnabled: !!movableTile && playEnabled,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index,
            ...'puzzleTile' in arguments[0] ? puzzleTile : {},
        });
    });

    const classList = [gameActive ? 'game-active' : ''];

    return (
        `
        <section
            class="puzzle-grid ${classList.join('')}"
            id="puzzle-grid"
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
