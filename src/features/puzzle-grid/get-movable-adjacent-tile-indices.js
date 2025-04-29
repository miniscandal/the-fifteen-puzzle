import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { TILE_MOVE_DOWN } from '@shared-constants/movement-direction';
import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_RIGHT } from '@shared-constants/movement-direction';

import { CONFIG_PUZZLE_GRID_PER_ROW } from '@shared-constants/config-puzzle-grid';
import { CONFIG_PUZZLE_GRID_TILES_PER_COLUMN } from '@shared-constants/config-puzzle-grid';

import { CONFIG_PUZZLE_GRID_FIRST_TILE_INDEX } from '@shared-constants/config-puzzle-grid';
import { CONFIG_PUZZLE_GRID_MOVEMENT_DISTANCE } from '@shared-constants/config-puzzle-grid';


function getMovableAdjacentTileIndices({ positionInGrid }) {
    const { index, row, column } = positionInGrid;
    const adjacentIndices = [];
    const pushIndex = (index, movementDirection) => adjacentIndices.push({
        index,
        movementDirection
    });

    if (row > CONFIG_PUZZLE_GRID_FIRST_TILE_INDEX) {
        pushIndex(index - CONFIG_PUZZLE_GRID_PER_ROW, TILE_MOVE_DOWN);
    }

    if (row < CONFIG_PUZZLE_GRID_PER_ROW - CONFIG_PUZZLE_GRID_MOVEMENT_DISTANCE) {
        pushIndex(index + CONFIG_PUZZLE_GRID_PER_ROW, TILE_MOVE_UP);
    }

    if (column > CONFIG_PUZZLE_GRID_FIRST_TILE_INDEX) {
        pushIndex(index - CONFIG_PUZZLE_GRID_MOVEMENT_DISTANCE, TILE_MOVE_RIGHT);
    }

    if (column < CONFIG_PUZZLE_GRID_TILES_PER_COLUMN - CONFIG_PUZZLE_GRID_MOVEMENT_DISTANCE) {
        pushIndex(index + CONFIG_PUZZLE_GRID_MOVEMENT_DISTANCE, TILE_MOVE_LEFT);
    }

    return adjacentIndices;
}

export { getMovableAdjacentTileIndices };
