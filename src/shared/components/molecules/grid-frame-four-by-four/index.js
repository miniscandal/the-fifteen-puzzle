import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';

import './style.css';

function GridFrameFourByFour({
    playEnabled = false,
    size = 'regular',
    puzzle = {},
    puzzleTile = {}
}) {
    const { id = '', permutation = [] } = puzzle;

    const generatePermutation = () => {
        return Array.from({ length: 16 }, (_, index) => index);
    };

    const items = permutation.length ? permutation : generatePermutation();

    const puzzleTiles = items.map((symbol) => PuzzleTile({
        id: symbol,
        symbol: symbol,
        ...puzzleTile
    }));

    return (
        `
        <div
            class="grid-frame-four-by-four"
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-puzzle-id=${id}
        >
            ${puzzleTiles.join('')}
        </div>
        `
    );
}

export { GridFrameFourByFour };
