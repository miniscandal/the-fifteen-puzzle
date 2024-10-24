import { DATA_ATTR_INDEX_TILE } from '@shared-constants/dom-element-data-attributes';


function updateSelectableTiles(tiles) {
    tiles.forEach(tile => {
        const { index, movementDirection } = tile;
        const movableTile = document.querySelector(DATA_ATTR_INDEX_TILE(index));

        movableTile.dataset.playEnabled = true;
        movableTile.dataset.movementDirection = movementDirection;
    });
}

export { updateSelectableTiles };
