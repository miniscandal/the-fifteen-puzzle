import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';

function createPermutation() {

    return Array.from({ length: MAX_TILES + 1 }, (_, index) => index);
}

function shuffleSimplePuzzleState(permutation) {
    const shuffled = [...permutation];
    const a = shuffled[0];
    shuffled[0] = shuffled[1];
    shuffled[1] = a;


    return shuffled;
}

function shufflePuzzleState(permutation) {
    const shuffled = [...permutation];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }


    return shuffled;
}


export {
    shuffleSimplePuzzleState,
    shufflePuzzleState,
    createPermutation
};
