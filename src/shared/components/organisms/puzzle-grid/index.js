import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle-grid-settings';
import { GRID_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_UP } from '@shared-constants/movement-direction';

import './style.css';


function PuzzleGrid({
    id = null,
    size = 'regular',
    gameActive = false,
    pendingSelection = false,
    puzzle = {
        id: null,
        permutation: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        state: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: 'Sequential pattern of a solved Fifteen Puzzle',
        playable: true,
        movableTileIndices: [
            {
                index: 1,
                movementDirection: TILE_MOVE_LEFT
            },
            {
                index: 4,
                movementDirection: TILE_MOVE_UP
            }
        ]
    },
    puzzleTile = {}
}) {
    const { permutation, state, movableTileIndices } = puzzle;

    const puzzleTiles = state.map((value, index) => {
        const movableTile = movableTileIndices.find(tile => tile.index === index);

        let id = '1';

        if (gameActive) {
            id = permutation[value];
        } else {
            id = permutation[value] === '0' ? 0 : '1';
        }

        return PuzzleTile({
            id,
            symbol: permutation[value],
            size: 'auto',
            playEnabled: !!movableTile && gameActive,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index: gameActive ? index : null,
            ...(puzzleTile ? puzzleTile : {})
        });
    });

    const classList = [
        gameActive ? 'active' : '',
        pendingSelection ? 'pending-selection' : '',
        size
    ];


    return (
        `
        <section id=${id} class="puzzle-grid ${classList.join(' ')}">
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { PuzzleGrid };
