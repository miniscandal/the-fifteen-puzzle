import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle-grid-settings';
import { GRID_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_UP } from '@shared-constants/movement-direction';

import './style.css';


function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    gameActive = false,
    puzzle = {
        id: undefined,
        permutation: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        state: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: '',
        movableTileIndices: [
            { index: 1, movementDirection: TILE_MOVE_LEFT },
            { index: 4, movementDirection: TILE_MOVE_UP }
        ],
        enabled: true
    },
    puzzleTile = {}
}) {
    const { id, permutation, state, movableTileIndices } = puzzle;
    const puzzleTiles = state.map((value, index) => {
        const movableTile = movableTileIndices.find(tile => tile.index === index);


        return PuzzleTile({
            id: value,
            symbol: permutation[value],
            size: 'auto',
            playEnabled: !!movableTile && playEnabled,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index,
            ...(puzzleTile ? puzzleTile : {})
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
