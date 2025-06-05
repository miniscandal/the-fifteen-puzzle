import { initializePuzzleGridState } from '@feat-puzzle-grid/initialize-puzzle-grid-state';
import { generateSolvedPuzzleState } from '@feat-puzzle-grid/generate-solved-puzzle-state';
import { loadPuzzleById } from '@feat-puzzle-grid/load-puzzle-by-id';


const PuzzleGridStateController = {
    initializePuzzleGridState,
    generateSolvedPuzzleState,
    loadPuzzleById,
    isSolved: (targetSolution, playerSolution) => targetSolution.every((value, index) => value === playerSolution[index])
};

export { PuzzleGridStateController };
