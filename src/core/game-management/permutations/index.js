import { findAdjacentTileIndices } from '@shared-components/organisms/puzzle-grid/logic/get-adjacent-tile-indices-in-grid';

const permutationA1 = {
    id: 'permutation_A1',
    permutation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    description: 'normal',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: false
};

const permutationA2 = {
    id: 'permutation_A2',
    permutation: [0, 12, 8, 4, 15, 11, 7, 3, 14, 10, 6, 2, 13, 9, 5, 1],
    description: '1 to 15 vertical from bottom to top',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA3 = {
    id: 'permutation_A3',
    permutation: [4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9, 0, 13, 14, 15],
    description: ' 1 to 15 (right-hand corner) from top to bottom',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA4 = {
    id: 'permutation_A4',
    permutation: [0, 15, 14, 13, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4],
    description: '1 to 15 horizontal from bottom to top',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA5 = {
    id: 'permutation_A5',
    permutation: [1, 2, 3, 0, 15, 14, 13, 4, 10, 11, 12, 5, 9, 8, 7, 6],
    description: '1 to 15 around and in and out',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA6 = {
    id: 'permutation_A6',
    permutation: [4, 5, 12, 13, 3, 6, 11, 14, 2, 7, 10, 15, 1, 8, 9, 0],
    description: '1 to 15 continuous from bottom to top',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA7 = {
    id: 'permutation_A7',
    permutation: [0, 9, 8, 1, 15, 10, 7, 2, 14, 11, 6, 3, 13, 12, 5, 4],
    description: '1 to 15 continuous (reversed) from top to bottom',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA8 = {
    id: 'permutation_A8',
    permutation: [7, 11, 14, 0, 4, 8, 12, 15, 2, 5, 9, 13, 1, 3, 6, 10],
    description: 'Diagonal from lower left-hand corner',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

const permutationA9 = {
    id: 'permutation_A9',
    permutation: [7, 4, 2, 1, 11, 8, 5, 3, 14, 12, 9, 6, 0, 15, 13, 10],
    description: ' Diagonal from upper right-hand corner',
    get getMovableTileIndices() {
        return findAdjacentTileIndices(this.permutation);
    },
    playEnabled: true
};

export {
    permutationA1,
    permutationA2,
    permutationA3,
    permutationA4,
    permutationA5,
    permutationA6,
    permutationA7,
    permutationA8,
    permutationA9
};
