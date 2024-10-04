import { TOTAL_TILES } from '@shared-constants/puzzle';

function generate16TilePermutation({ length = TOTAL_TILES }) {
    const permutation = Array.from({ length }, (_, index) => index);

    return permutation;
}

export { generate16TilePermutation };
