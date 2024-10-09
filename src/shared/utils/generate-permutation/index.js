/**
 * Fisher-Yates shuffle algorithm:
 * Randomly shuffles the elements of the array in place
 */

import { TOTAL_TILES } from '@shared-constants/puzzle';

function generate16TilePermutation({ length = TOTAL_TILES }) {
    const permutation = Array.from({ length }, (_, index) => index);

    for (let i = permutation.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }

    return permutation;
}

export { generate16TilePermutation };
