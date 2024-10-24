import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';
import { MOVE_ABOVE } from '@shared-constants/movement-direction';
import { MOVE_BELOW } from '@shared-constants/movement-direction';
import { MOVE_RIGHT } from '@shared-constants/movement-direction';
import { MOVE_LEFT } from '@shared-constants/movement-direction';


function getAdjacentIndicesInGrid({ index, row, column }) {
    const adjacentIndices = [];
    const pushIndex = (index, movementDirection) => adjacentIndices.push({
        index,
        movementDirection
    });

    if (row > FIRST_TILE_INDEX) {
        pushIndex(index - TILES_PER_ROW, MOVE_ABOVE);
    }

    if (row < TILES_PER_ROW - MOVEMENT_DISTANCE) {
        pushIndex(index + TILES_PER_ROW, MOVE_BELOW);
    }

    if (column > FIRST_TILE_INDEX) {
        pushIndex(index - MOVEMENT_DISTANCE, MOVE_LEFT);
    }

    if (column < TILES_PER_ROW - MOVEMENT_DISTANCE) {
        pushIndex(index + MOVEMENT_DISTANCE, MOVE_RIGHT);
    }

    return adjacentIndices;
}


export { getAdjacentIndicesInGrid };
