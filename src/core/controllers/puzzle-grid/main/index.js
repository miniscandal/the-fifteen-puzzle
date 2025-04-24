import { generateSolvedPuzzleState } from '@feat-puzzle-grid/generate-solved-puzzle-state';
import { basicTestShuffle } from '@feat-puzzle-grid/basic-test-shuffle';
import { shuffleFromSolvedState } from '@feat-puzzle-grid/shuffle-from-solution-state';
import { swapTileIndices } from '@feat-puzzle-grid/swap-tiles-indices';
import { getGridPositionFromIndex } from '@feat-puzzle-grid/get-grid-position-from-index';
import { getMovableAdjacentTileIndices } from '@feat-puzzle-grid/get-movable-adjacent-tile-indices';
import { findEmptyTileIndex } from '@feat-puzzle-grid/find-empty-tile-index';
import { getValidMoveTileIndices } from '@feat-puzzle-grid/get-valid-move-tile-indices';
import { loadPuzzleById } from '@feat-puzzle-grid/load-puzzle-by-id';
import { handleTileClick } from '@feat-puzzle-grid/handle-tile-click';


const PuzzleGridController = {
    generateSolvedPuzzleState,
    basicTestShuffle,
    shuffleFromSolvedState,
    isSolved: (solution) => solution.every((num, index) => num === index),
    swapTileIndices,
    getGridPositionFromIndex,
    findEmptyTileIndex,
    getMovableAdjacentTileIndices,
    getValidMoveTileIndices,
    handleTileClick,
    loadPuzzleById
};

export { PuzzleGridController };
