import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GAME_ID, PUZZLE_HELPER_GAME_ID } from '@shared-constants/dom-element-identifiers';

import { PUZZLE_GRID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PuzzleGame() {
    const puzzleGameHelp = PuzzleGrid({
        size: 'small',
        puzzleTile: {
            symbol: '?'
        }
    });
    const puzzleGrid = PuzzleGrid({
        id: PUZZLE_GRID,
        size: 'medium',
        puzzleTile: {
            symbol: '?'
        }
    });


    return (
        `
        <div>
            <section id=${PUZZLE_HELPER_GAME_ID}>
                ${puzzleGameHelp}
            </section>
            <section id=${PUZZLE_GAME_ID}>
                ${puzzleGrid}
            </section>
        </div>
        `
    );
}

export { PuzzleGame };
