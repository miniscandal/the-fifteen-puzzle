import { permutationA5 } from '@core-game-management/permutations';
import { generatePermutation } from '@shared-utils/generate-permutation';

import { TOTAL_TILES } from '@shared-constants/puzzle';

const puzzleGridArt = {
    playEnabled: false,
    size: 'regular',
    puzzle: permutationA5,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }
};

const puzzleGridPractice = {
    playEnabled: true,
    size: 'small',
    puzzle: {
        permutation: generatePermutation({ length: TOTAL_TILES })
    },
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
