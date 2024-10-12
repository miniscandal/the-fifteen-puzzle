import { TOTAL_TILES } from '@shared-constants/puzzle';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle';

import { createPuzzleTile } from './helpers/create-puzzle-tile';

import './style.css';

function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    puzzle = {
        id: undefined,
        permutation: []
    },
    puzzleTile = {
        size: 'auto',
        playEnabled: false
    },
    logic = {
        getAdjacentTileIndicesInGrid: () => { },
        generatePermutation: () => { }
    }
}) {
    const permutation = puzzle.permutation.length
        ? puzzle.permutation
        : generatePermutation({ length: TOTAL_TILES });

    const { getAdjacentTileIndicesInGrid, generatePermutation } = logic;

    const emptyTileIndex = permutation.findIndex(value => value === EMPTY_TILE_VALUE);
    const movableTileIndices = getAdjacentTileIndicesInGrid(emptyTileIndex);

    const puzzleTiles = permutation.map((symbol, index) => (
        createPuzzleTile({ symbol, index, movableTileIndices, puzzleTile })
    ));

    return (
        `
        <section
            class="puzzle-grid"
            id="grid-frame-four-by-four"
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-puzzle-id=${puzzle.id}
        >
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { PuzzleGrid };
