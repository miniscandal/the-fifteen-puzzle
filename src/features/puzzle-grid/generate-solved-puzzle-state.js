function generateSolvedPuzzleState(totalTiles) {

    return Array.from({ length: totalTiles + 1 }, (_, index) => index);
}

export { generateSolvedPuzzleState };
