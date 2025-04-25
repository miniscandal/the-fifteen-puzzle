import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_COLUMN } from '@shared-constants/puzzle-grid-settings';


function getGridPositionFromIndex({ emptyTileIndex }) {
    const position = {
        row: Math.floor(emptyTileIndex / TILES_PER_ROW),
        column: emptyTileIndex % TILES_PER_COLUMN
    };


    return position;
}

export { getGridPositionFromIndex };
