import { PuzzleTile } from '@shared-components/molecules/puzzle-tile';

import { GRID_ROW } from '@shared-constants/puzzle';
import { GRID_COLUMN } from '@shared-constants/puzzle';

function createPuzzleTile({ symbol, index, movableTileIndices, puzzleTile }) {
    const movableTile = movableTileIndices?.find(tile => tile.index === index);

    const tile = PuzzleTile({
        id: symbol,
        symbol,
        selectable: !!movableTile,
        movementDirection: movableTile ? movableTile.movementDirection : null,
        row: Math.floor(index / GRID_ROW) + 1,
        column: (index % GRID_COLUMN) + 1,
        index,
        ...puzzleTile
    });

    return tile;
}

export { createPuzzleTile };
