function updateGameState(GameController, currentTile, emptyTile) {
    GameController.puzzle.updateState({
        currentElement: currentTile.dataset,
        emptyElement: emptyTile.dataset,
    });
}

export { updateGameState };
