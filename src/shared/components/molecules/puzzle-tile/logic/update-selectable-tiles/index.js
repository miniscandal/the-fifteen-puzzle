function updateSelectableTiles(tiles) {
    tiles.forEach(tile => {
        const movableTile = document.querySelector(`[data-index='${tile.index}']`);

        movableTile.dataset.selectable = true;
        movableTile.dataset.movementDirection = tile.movementDirection;
    });
}

export { updateSelectableTiles };
