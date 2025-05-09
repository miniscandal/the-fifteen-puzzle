import { initializePuzzleGridState } from '@feat-puzzle-grid/initialize-puzzle-grid-state';
import { generateSolvedPuzzleState } from '@feat-puzzle-grid/generate-solved-puzzle-state';
import { loadPuzzleById } from '@feat-puzzle-grid/load-puzzle-by-id';


const PuzzleGridState = {
    initializePuzzleGridState,
    generateSolvedPuzzleState,
    loadPuzzleById,
    isSolved: (solution) => solution.every((num, index) => num === index)
};

export { PuzzleGridState };
