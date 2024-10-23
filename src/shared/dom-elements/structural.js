import { BODY } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_GRID } from '@shared-constants/dom-element-identifiers';


const domElementBody = () => document.querySelector(BODY);
const domElementPuzzleGrid = () => document.getElementById(PUZZLE_GRID);

export {
    domElementBody,
    domElementPuzzleGrid
};
