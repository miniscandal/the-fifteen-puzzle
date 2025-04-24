import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { TILE_MOVE_DOWN } from '@shared-constants/movement-direction';
import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_RIGHT } from '@shared-constants/movement-direction';


function getValidMoveTileIndices({ solution, permutation }) {
    const mappedPermutation = solution.map(value => permutation[value]);

    const emptyTileIndex = this.getEmptyTilePositionInGrid(mappedPermutation, EMPTY_TILE_VALUE);
    const positionInGrid = this.calculateIndexPositionInGrid({
        emptyTileIndex,
        tilesPerRow: TILES_PER_ROW,
        tilesPerColumn: TILES_PER_COLUMN
    });

    const movableTileIndices = this.getAdjacentIndicesInGrid({
        positionInGrid: {
            ...positionInGrid,
            index: emptyTileIndex
        },
        firstTileIndex: FIRST_TILE_INDEX,
        tilesPerRow: TILES_PER_ROW,
        tileMoveUp: TILE_MOVE_UP,
        tileMoveDown: TILE_MOVE_DOWN,
        tileMoveLeft: TILE_MOVE_LEFT,
        tileMoveRight: TILE_MOVE_RIGHT,
        movementDistance: MOVEMENT_DISTANCE
    });


    return movableTileIndices;
}

export { getValidMoveTileIndices };
