import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';
import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { TILE_MOVE_DOWN } from '@shared-constants/movement-direction';
import { TILE_MOVE_RIGHT } from '@shared-constants/movement-direction';
import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';


function getAdjacentIndicesInGrid({ index, row, column }) {
    const adjacentIndices = [];
    const pushIndex = (index, movementDirection) => adjacentIndices.push({
        index,
        movementDirection
    });

    if (row > FIRST_TILE_INDEX) {
        pushIndex(index - TILES_PER_ROW, TILE_MOVE_DOWN);
    }

    if (row < TILES_PER_ROW - MOVEMENT_DISTANCE) {
        pushIndex(index + TILES_PER_ROW, TILE_MOVE_UP);
    }

    if (column > FIRST_TILE_INDEX) {
        pushIndex(index - MOVEMENT_DISTANCE, TILE_MOVE_RIGHT);
    }

    if (column < TILES_PER_ROW - MOVEMENT_DISTANCE) {
        pushIndex(index + MOVEMENT_DISTANCE, TILE_MOVE_LEFT);
    }

    return adjacentIndices;
}


export { getAdjacentIndicesInGrid };
