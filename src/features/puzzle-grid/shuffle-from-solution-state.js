function shuffleFromSolvedState(permutation) {
    for (let i = permutation.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }


    return permutation;
}

export { shuffleFromSolvedState };
