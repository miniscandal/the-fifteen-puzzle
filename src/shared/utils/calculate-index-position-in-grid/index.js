import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';


function calculateIndexPositionInGrid(index) {
    const indexPosition = {
        row: Math.floor(index / TILES_PER_ROW),
        column: index % TILES_PER_ROW
    };

    return indexPosition;
}

export { calculateIndexPositionInGrid };
