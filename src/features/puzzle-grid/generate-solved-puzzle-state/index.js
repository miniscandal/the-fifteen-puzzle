import { CONFIG_PUZZLE_GRID_MAX_TILES } from '@shared-constants/config-puzzle-grid';


function generateSolvedPuzzleState() {

    return Array.from({ length: CONFIG_PUZZLE_GRID_MAX_TILES + 1 }, (_, index) => index);
}

export { generateSolvedPuzzleState };
