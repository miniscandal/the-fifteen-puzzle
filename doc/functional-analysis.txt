function updateGameState(Game, currentTile, emptyTile) {
    const { id: currentId, index: currentIndex } = currentTile.dataset;
    const { id: emptyId, index: emptyIndex } = emptyTile.dataset;

    Game.puzzle.state[currentIndex] = Number(currentId);
    Game.puzzle.state[emptyIndex] = Number(emptyId);
}

export { updateGameState };
