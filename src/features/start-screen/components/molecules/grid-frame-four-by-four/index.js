import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';

import './style.css';

function GridFrameFourByFour({ size = 'regular', puzzleTile = {} }) {
    const data = Array.from({ length: 16 }, (_, index) => index);

    const puzzleTiles = data.map((_, index) => PuzzleTile({
        id: index,
        symbol: index,
        ...puzzleTile
    }));

    return (
        `
        <div class="grid-frame-four-by-four" data-size=${size}>
            ${puzzleTiles.join('')}
        </div>
        `
    );
}

export { GridFrameFourByFour };
