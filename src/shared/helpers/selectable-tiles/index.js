import { handleTileClick } from '@shared-components/molecules/grid-frame-four-by-four/logic';

function resetSelectableTiles(tiles) {
    tiles.forEach(tile => {
        tile.setAttribute('data-selectable', false);
        tile.setAttribute('data-movement-direction', null);
    });
}

function isSelectableTile(element) {
    return element &&
        element.getAttribute('data-selectable') === 'true' &&
        element.getAttribute('data-symbol');
}

function selectPuzzleTile({ Game }) {
    const gridFrame = document.getElementById('grid-frame-four-by-four');

    gridFrame.addEventListener('click', (event) => handleTileClick(event, Game));
}

export { resetSelectableTiles, isSelectableTile, selectPuzzleTile };
