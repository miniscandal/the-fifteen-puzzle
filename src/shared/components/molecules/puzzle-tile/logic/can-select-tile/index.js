function canSelectTile(element) {
    const isTile = !!element && element.hasAttribute('data-symbol');
    const isSelectableTile = isTile && element.getAttribute('data-play-enabled') === 'true';

    return isSelectableTile;
}

export { canSelectTile };
