function updateGameState(Game, currentTile, emptyTile) {
    Game.updateGameState({
        currentElement: currentTile.dataset,
        emptyElement: emptyTile.dataset,
    });
}

export { updateGameState };
