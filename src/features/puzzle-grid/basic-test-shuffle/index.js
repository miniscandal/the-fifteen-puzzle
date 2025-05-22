function basicTestShuffle(permutation) {
    const shuffled = [...permutation];

    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];


    return shuffled;
}

export { basicTestShuffle };
