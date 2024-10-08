import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';
import { GRID_COLUMN, GRID_ROW, TOTAL_TILES } from '@shared-constants/puzzle';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle';

import './style.css';

function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    puzzle = { id: '', permutation: [] },
    puzzleTile = { size: 'auto', playEnabled: false },
    logic = { getAdjacentTileIndicesInGrid: () => { }, generatePermutation: () => { } }
}) {
    const { id, permutation } = puzzle;
    const { getAdjacentTileIndicesInGrid, generatePermutation } = logic;
    const tileOrder = permutation.length
        ? permutation
        : generatePermutation({ length: TOTAL_TILES });
    const emptyTileIndex = tileOrder.findIndex(value => value === EMPTY_TILE_VALUE);
    const movableTileIndices = getAdjacentTileIndicesInGrid(emptyTileIndex);

    const puzzleTiles = tileOrder.map((symbol, index) => {
        const movableTile = movableTileIndices.find(tile => tile.index === index);

        const tile = PuzzleTile({
            id: symbol,
            symbol: symbol,
            selectable: !!movableTile,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row: Math.floor(index / GRID_ROW) + 1,
            column: (index % GRID_COLUMN) + 1,
            index,
            ...puzzleTile
        });

        return tile;
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
