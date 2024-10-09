import { puzzles } from '@core-game-management/permutations';

const gridFrameFourByFourArt = {
    playEnabled: false,
    size: 'regular',
    puzzle: puzzles.permutationA5,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }
};

const gridFrameFourByFourPractice = {
    playEnabled: true,
    size: 'small',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }
};

const gridFrameFourByFourPlay = {
    playEnabled: false,
    size: 'medium',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: true
    }

};

export {
    gridFrameFourByFourArt,
    gridFrameFourByFourPractice,
    gridFrameFourByFourPlay
};
