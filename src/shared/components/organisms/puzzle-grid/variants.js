import { puzzleA5 } from '@core-game-management/puzzles';

const puzzleGridArt = {
    puzzle: puzzleA5,
    puzzleTile: {
        playEnabled: false
    }
};

const puzzleGridPractice = {
    size: 'small',
    puzzleTile: {
        playEnabled: false
    }
};

const puzzleGridPlay = {
    playEnabled: true,
    size: 'medium',
    puzzle: undefined,
    puzzleTile: {
        id: undefined,
        symbol: '?',
        size: 'auto',
        playEnabled: false,
        movementDirection: undefined,
        row: undefined,
        column: undefined,
        index: undefined
    }
};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay
};
