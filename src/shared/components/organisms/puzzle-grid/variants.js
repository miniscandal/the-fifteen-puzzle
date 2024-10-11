import { permutationA5 } from '@core-game-management/permutations';

const puzzleGridArt = {
    playEnabled: false,
    size: 'regular',
    puzzle: {
        id: permutationA5.id,
        permutation: permutationA5.permutation
    },
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    },
    logic: undefined
};

const puzzleGridPractice = {
    playEnabled: true,
    size: 'small',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    },
    logic: undefined
};

const puzzleGridPlay = {
    playEnabled: false,
    size: 'medium',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: true
    },
    logic: undefined
};

export {
    puzzleGridArt,
    puzzleGridPractice,
    puzzleGridPlay
};
