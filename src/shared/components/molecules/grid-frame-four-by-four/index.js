import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';
import { generate16TilePermutation } from '@shared-utils/generate-permutation';
import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';
import { TOTAL_TILES } from '@shared-constants/puzzle';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle';

import './style.css';

function selectPuzzleTile({ Game }) {
    document.getElementById('grid-frame-four-by-four').addEventListener('click', (event) => {
        if (!event.target || event.target.getAttribute('data-selectable') === 'false' || !event.target.getAttribute('data-symbol')) {
            return;
        }

        document.querySelectorAll('[data-selectable="true"]').forEach(tile => {
            tile.setAttribute('data-selectable', false);
            tile.setAttribute('data-movement-direction', null);
        });


        const element = event.target;
        const emptyTile = document.querySelector('[data-id="0"]');

        const helperRow = element.dataset.row;
        const helperColumn = element.dataset.column;

        element.style.gridRow = emptyTile.dataset.row;
        element.style.gridColumn = emptyTile.dataset.column;
        element.dataset.row = emptyTile.dataset.row;
        element.dataset.column = emptyTile.dataset.column;


        emptyTile.style.gridRow = helperRow;
        emptyTile.style.gridColumn = helperColumn;
        emptyTile.dataset.column = helperColumn;
        emptyTile.dataset.row = helperRow;


        const helperIndex = element.dataset.index;

        element.dataset.index = emptyTile.dataset.index;
        emptyTile.dataset.index = helperIndex;


        const movableTileIndices = getMovableTileIndices(Number(helperIndex));

        movableTileIndices.forEach(tile => {
            const element = document.querySelector(`[data-index='${tile.index}']`);

            element.dataset.selectable = true;
            element.dataset.movementDirection = tile.movementDirection;
        });

        Game.puzzle.state[element.dataset.index] = Number(element.dataset.id);
        Game.puzzle.state[emptyTile.dataset.index] = Number(emptyTile.dataset.id);
    });
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
