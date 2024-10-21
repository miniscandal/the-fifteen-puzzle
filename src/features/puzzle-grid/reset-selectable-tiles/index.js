function resetSelectableTiles(tiles) {
    tiles.forEach(tile => {
        tile.setAttribute('data-play-enabled', false);
        tile.setAttribute('data-movement-direction', null);
    });
}

export { resetSelectableTiles };
