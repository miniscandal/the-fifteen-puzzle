import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';
import { generate16TilePermutation } from '@shared-utils/generate-permutation';
import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';
import { TOTAL_TILES } from '@shared-constants/puzzle';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle';

import './style.css';

function updateGameState(Game, currentTile, emptyTile) {
    const { id: currentId, index: currentIndex } = currentTile.dataset;
    const { id: emptyId, index: emptyIndex } = emptyTile.dataset;

    Game.puzzle.state[currentIndex] = Number(currentId);
    Game.puzzle.state[emptyIndex] = Number(emptyId);
}

function updateSelectableTiles(tiles) {
    tiles.forEach(tile => {
        const movableTile = document.querySelector(`[data-index='${tile.index}']`);

        movableTile.dataset.selectable = true;
        movableTile.dataset.movementDirection = tile.movementDirection;
    });
}

function swapTilesData(currentTile, emptyTile) {
    const { row: currentRow, column: currentColumn, index: currentIndex } = currentTile.dataset;
    const { row: emptyRow, column: emptyColumn, index: emptyIndex } = emptyTile.dataset;

    currentTile.style.gridRow = emptyRow;
    currentTile.style.gridColumn = emptyColumn;
    currentTile.dataset.row = emptyRow;
    currentTile.dataset.column = emptyColumn;

    emptyTile.style.gridRow = currentRow;
    emptyTile.style.gridColumn = currentColumn;
    emptyTile.dataset.row = currentRow;
    emptyTile.dataset.column = currentColumn;


    emptyTile.dataset.index = currentIndex;
    currentTile.dataset.index = emptyIndex;
}

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

function handleTileClick(event, Game) {
    const currentTile = event.target;

    if (!isSelectableTile(currentTile)) {
        return;
    }

    const tiles = document.querySelectorAll('[data-selectable="true"]');
    resetSelectableTiles(tiles);

    const emptyTile = document.querySelector('[data-id="0"]');
    swapTilesData(currentTile, emptyTile);

    const movableTileIndices = getMovableTileIndices(Number(emptyTile.dataset.index));
    updateSelectableTiles(movableTileIndices);

    updateGameState(Game, currentTile, emptyTile);
}

function selectPuzzleTile({ Game }) {
    const gridFrame = document.getElementById('grid-frame-four-by-four');

    gridFrame.addEventListener('click', (event) => handleTileClick(event, Game));
}

function GridFrameFourByFour({
    playEnabled = false,
    size = 'regular',
    puzzle = { id: '', permutation: [] },
    puzzleTile = { size: 'auto', playEnabled: false }
}) {
    const { id = '', permutation = [] } = puzzle;

    const tileOrder = permutation.length ? permutation : generate16TilePermutation({ length: TOTAL_TILES });

    const emptyTileIndex = tileOrder.findIndex(value => value === EMPTY_TILE_VALUE);

    const movableTileIndices = getMovableTileIndices(emptyTileIndex);

    const puzzleTiles = tileOrder.map((symbol, index) => {
        const movableTile = movableTileIndices.find(tile => tile.index === index);

        let row = null;
        let column = null;
        row = Math.floor(index / 4) + 1;
        column = (index % 4) + 1;

        const tile = PuzzleTile({
            id: symbol,
            symbol: symbol,
            selectable: !!movableTile,
            movementDirection: movableTile ? movableTile.movementDirection : null,
            row,
            column,
            index,
            ...puzzleTile
        });

        return tile;
    });

    return (
        `
        <section
            id="grid-frame-four-by-four"
            class="grid-frame-four-by-four"
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-puzzle-id=${id}
        >
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { GridFrameFourByFour, selectPuzzleTile };
