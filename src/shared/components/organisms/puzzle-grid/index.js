import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle-grid-settings';
import { GRID_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { PUZZLE_GRID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PuzzleGrid({
    size = 'regular',
    gameActive = false,
    pendingSelection = false,
    puzzle = {
        id: 'puzzleA0',
        permutation: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        solution: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
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
    const { id, permutation, solution, movableTileIndices } = puzzle;

    const puzzleTiles = solution.map((value, index) => {

        const movableTile = movableTileIndices.find(tile => tile.index === index);


        return PuzzleTile({
            id: gameActive ? permutation[value] : null,
            symbol: permutation[value],
            size: 'auto',
            playEnabled: !!movableTile && gameActive,
            movementDirection: gameActive && movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index: gameActive ? index : null,
            ...(puzzleTile ? puzzleTile : {})
        });
    });

    const classList = [
        gameActive ? 'active' : '',
        pendingSelection ? 'pending-selection' : '',
        `size-${size}`
    ];


    return (
        `
        <section id=${PUZZLE_GRID} data-puzzle-id=${id} class="puzzle-grid ${classList.join(' ')}">
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { PuzzleGrid };
