import { puzzleA5 } from '@core-constants/puzzles.js';
import { PuzzleGrid } from '.';
import { PUZZLE_GAME_ID } from '@feature-play-screen/components/organisms/puzzle-game/logic/constants/element-identifiers';

const puzzleGridArt = {
    puzzle: puzzleA5,
    puzzleTile: {
        playEnabled: false
    }
};

const puzzleGridPractice = {
    playEnabled: true,
    size: 'small',
    puzzleTile: {
        playEnabled: false
    }
};

const puzzleGridPlay = {
    playEnabled: true,
    size: 'medium',
    get puzzle() {
        (async function getPuzzle() {
            try {
                const { ['puzzleA1']: puzzle } = await import('@core-constants/puzzles.js');
                console.log(puzzle);
                const { playEnabled, size } = puzzleGridPlay;
                const puzzleGrid = PuzzleGrid({ playEnabled, size, puzzle });
                document.getElementById(PUZZLE_GAME_ID).innerHTML = puzzleGrid;
            } catch (error) {
                console.log(error);
            }
        })();

        return undefined;
    },
    puzzleTile: {
        symbol: '?'
    }
};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay
};
