import { PUZZLE_GRID } from '@shared-constants/dom-element-identifiers';


const PuzzleDomElementAccessors = {
    getPuzzleGrid: () => document.getElementById(PUZZLE_GRID)
};

export { PuzzleDomElementAccessors };
