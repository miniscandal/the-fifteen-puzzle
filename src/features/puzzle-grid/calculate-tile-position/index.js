import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';


function calculateTilePosition(index) {
    const tilePosition = {
        row: Math.floor(index / TILES_PER_ROW),
        column: index % TILES_PER_ROW
    };

    return tilePosition;
}

export { calculateTilePosition };
