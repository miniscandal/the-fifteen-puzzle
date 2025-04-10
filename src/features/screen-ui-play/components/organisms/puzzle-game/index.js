import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PuzzleGame() {
    const puzzleGridAssist = PuzzleGrid({
        size: 'small',
        puzzleTile: {
            symbol: '?'
        }
    });
    const puzzleGridMain = PuzzleGrid({
        size: 'medium',
        puzzleTile: {
            symbol: '?'
        }
    });


    return (
        `
        <div class="puzzle-game">
            <div id=${PUZZLE_GAME_ID}>
                ${puzzleGridMain}
            </div>
            <div id=${PUZZLE_HELPER_GAME_ID}>
                ${puzzleGridAssist}
            </div>
        </div>
        `
    );
}

export { PuzzleGame };
