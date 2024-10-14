import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridPlay } from '@shared-components/organisms/puzzle-grid/variants';

import { PUZZLE_GAME_ID } from './logic/constants/element-identifiers';

import './style.css';

function PuzzleGame() {
    const puzzleGrid = PuzzleGrid(puzzleGridPlay);

    return (
        `
        <section id=${PUZZLE_GAME_ID} class="puzzle-game">
            ${puzzleGrid}
        </section>
        `
    );
}

export { PuzzleGame };
