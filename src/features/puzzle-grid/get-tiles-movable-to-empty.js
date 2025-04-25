import { findEmptyTileIndex } from './find-empty-tile-index';


function getTilesMovableToEmpty({
    solution,
    permutation,
    getGridPositionFromIndex,
    getMovableAdjacentTileIndices
}) {
    const mappedPermutation = solution.map(value => permutation[value]);

    const emptyTileIndex = findEmptyTileIndex(mappedPermutation);
    const positionInGrid = getGridPositionFromIndex({
        emptyTileIndex
    });

    const movableTileIndices = getMovableAdjacentTileIndices({
        positionInGrid: {
            ...positionInGrid,
            index: emptyTileIndex
        }
    });


    return movableTileIndices;
}

export { getTilesMovableToEmpty };
