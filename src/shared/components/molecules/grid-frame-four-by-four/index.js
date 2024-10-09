import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';
import { generate16TilePermutation } from '@shared-utils/generate-permutation';
import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';
import { TOTAL_TILES } from '@shared-constants/puzzle';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle';

import './style.css';

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

export { GridFrameFourByFour };
