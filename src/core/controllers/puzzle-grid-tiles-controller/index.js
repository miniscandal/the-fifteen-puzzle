import { swapTileIndices } from '@feat-puzzle-grid/swap-tiles-indices';
import { getGridPositionFromIndex } from '@feat-puzzle-grid/get-grid-position-from-index';
import { findEmptyTileIndex } from '@feat-puzzle-grid/find-empty-tile-index';
import { getMovableAdjacentTileIndices } from '@feat-puzzle-grid/get-movable-adjacent-tile-indices';
import { getTilesMovableToEmpty } from '@feat-puzzle-grid/get-tiles-movable-to-empty';
import { handleTileClick } from '@feat-puzzle-grid/handle-tile-click';


const PuzzleGridTilesController = {
    swapTileIndices,
    getGridPositionFromIndex,
    findEmptyTileIndex,
    getMovableAdjacentTileIndices,
    getTilesMovableToEmpty,
    handleTileClick
};

export { PuzzleGridTilesController };
