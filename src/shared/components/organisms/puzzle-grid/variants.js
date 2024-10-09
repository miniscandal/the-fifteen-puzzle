import { puzzles } from '@core-game-management/permutations';

const puzzleGridArt = {
    playEnabled: false,
    size: 'regular',
    puzzle: puzzles.permutationA5,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }
};

const puzzleGridPractice = {
    playEnabled: true,
    size: 'small',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }
};

const puzzleGridPlay = {
    playEnabled: false,
    size: 'medium',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: true
    }

};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay
};
