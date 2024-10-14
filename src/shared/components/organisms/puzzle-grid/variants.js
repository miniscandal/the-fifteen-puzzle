import { puzzleA5 } from '@core-game-management/puzzles';

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
        return puzzleA5;
    }
};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay
};
