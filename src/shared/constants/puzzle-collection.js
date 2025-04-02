const puzzleA1 = {
    id: 'puzzleA1',
    permutation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    description: 'normal',
    enabled: false
};

const puzzleA2 = {
    id: 'puzzleA2',
    permutation: [0, 12, 8, 4, 15, 11, 7, 3, 14, 10, 6, 2, 13, 9, 5, 1],
    description: '1 to 15 vertical from bottom to top',
    enabled: true
};

const puzzleA3 = {
    id: 'puzzleA3',
    permutation: [4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9, 0, 15, 14, 13],
    description: ' 1 to 15 (right-hand corner) from top to bottom',
    enabled: true
};

const puzzleA4 = {
    id: 'puzzleA4',
    permutation: [1, 2, 3, 4, 12, 13, 14, 5, 11, 0, 15, 6, 10, 9, 8, 7],
    description: '1 to 15 horizontal from bottom to top',
    enabled: true
};

const puzzleA5 = {
    id: 'puzzleA5',
    permutation: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    description: '1 to 15 around and in and out',
    enabled: true
};

const puzzleA6 = {
    id: 'puzzleA6',
    permutation: [5, 1, 13, 9, 6, 2, 14, 10, 7, 3, 15, 11, 4, 0, 12, 8],
    description: '1 to 15 continuous from bottom to top',
    enabled: true
};

const puzzleA7 = {
    id: 'puzzleA7',
    permutation: [9, 1, 10, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 0, 8],
    description: '1 to 15 continuous (reversed) from top to bottom',
    enabled: true
};

const puzzleA8 = {
    id: 'puzzleA8',
    permutation: [3, 10, 7, 13, 4, 0, 1, 2, 5, 11, 8, 14, 6, 12, 9, 15],
    description: 'Diagonal from lower left-hand corner',
    enabled: true
};

const puzzleA9 = {
    id: 'puzzleA9',
    permutation: [14, 11, 6, 3, 8, 15, 12, 7, 4, 9, 0, 13, 2, 5, 10, 1],
    description: ' Diagonal from upper right-hand corner',
    enabled: true
};

export {
    puzzleA1,
    puzzleA2,
    puzzleA3,
    puzzleA4,
    puzzleA5,
    puzzleA6,
    puzzleA7,
    puzzleA8,
    puzzleA9
};
