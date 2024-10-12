import { permutationA5 } from '@core-game-management/permutations';

import { createPuzzleTile } from './helpers/create-puzzle-tile';

import './style.css';

function PuzzleGrid({
    playEnabled = false,
    size = 'regular',
    puzzle = {
        id: undefined,
        permutation: permutationA5.permutation,
        description: '',
        movableTileIndices: [],
        playEnabled: false
    },
    puzzleTile = {
        size: 'auto',
        playEnabled: false
    }
}) {
    const { id, permutation, movableTileIndices } = puzzle;

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
            data-puzzle-id=${id}
        >
            ${puzzleTiles.join('')}
        </section>
        `
    );
}

export { PuzzleGrid };
