import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GAME_ID, PUZZLE_HELPER_GAME } from '@shared-constants/dom-element-identifiers';

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
        size: 'medium',
        puzzleTile: {
            symbol: '?'
        }
    });


    return (
        `
        <div>
            <section id=${PUZZLE_HELPER_GAME}>
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
