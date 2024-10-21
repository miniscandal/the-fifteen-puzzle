import { puzzleA5 } from '@shared-constants/puzzle-collection.js';

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
    playEnabled: false,
    size: 'medium',
    puzzleTile: {
        symbol: '?'
    }
};

const puzzleGridGamePlay = {
    playEnabled: true,
    gameActive: true,
    size: 'medium',
};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay,
    puzzleGridGamePlay
};
