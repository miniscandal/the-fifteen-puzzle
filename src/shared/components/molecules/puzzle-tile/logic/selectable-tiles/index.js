import { gridFramFourByFour } from '@shared-components/organisms/puzzle-grid/logic/main';

function resetSelectableTiles(tiles) {
    tiles.forEach(tile => {
        tile.setAttribute('data-selectable', false);
        tile.setAttribute('data-movement-direction', null);
    });
}

function isSelectableTile(element) {
    const isTile = element && element.getAttribute('data-symbol');
    const isSelectable = isTile && element.getAttribute('data-selectable') === 'true';

    return isTile && isSelectable;
}

function selectPuzzleTile({ Game }) {
    const gridFrame = document.getElementById('grid-frame-four-by-four');

    gridFrame.addEventListener('click', (event) => gridFramFourByFour(event, Game));
}

export { resetSelectableTiles, isSelectableTile, selectPuzzleTile };
