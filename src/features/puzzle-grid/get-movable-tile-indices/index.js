import { calculateTilePosition } from '@feat-puzzle-grid/calculate-tile-position';
import { findAdjacentIndicesInGrid } from '@feat-puzzle-grid/find-adjacent-indices-in-grid';


function getMovableTileIndices(emptyTile) {
    const index = Number(emptyTile.dataset.index);
    const position = calculateTilePosition(index);
    const movableTileIndices = findAdjacentIndicesInGrid({
        index,
        ...position
    });

    return movableTileIndices;
}

export { getMovableTileIndices };
