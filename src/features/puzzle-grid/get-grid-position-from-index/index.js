import { CONFIG_PUZZLE_GRID_PER_ROW } from '@shared-constants/config-puzzle-grid';
import { CONFIG_PUZZLE_GRID_TILES_PER_COLUMN } from '@shared-constants/config-puzzle-grid';


function getGridPositionFromIndex({ emptyTileIndex }) {
    const position = {
        row: Math.floor(emptyTileIndex / CONFIG_PUZZLE_GRID_PER_ROW),
        column: emptyTileIndex % CONFIG_PUZZLE_GRID_TILES_PER_COLUMN
    };


    return position;
}

export { getGridPositionFromIndex };
