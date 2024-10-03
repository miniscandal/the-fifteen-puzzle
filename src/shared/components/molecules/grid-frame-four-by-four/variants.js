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
    playEnabled: true,
    size: 'medium',
    puzzle: undefined,
    puzzleTile: {
        size: 'auto',
        playEnabled: false
    }

};

export { gridFrameFourByFourArt, gridFrameFourByFourPractice, gridFrameFourByFourPlay };
