import { SquareTile } from '@shared-components/atoms/square-tile';

import './style.css';

function GridFrameFourByFour({ size = 'regular', squareTile = {} }) {
    const data = Array.from({ length: 16 }, (_, index) => index);

    const squareTiles = data.map((_, index) => SquareTile({
        id: index,
        symbol: index,
        ...squareTile
    }));

    return (
        `
        <div class="grid-frame-four-by-four" data-size=${size}>
            ${squareTiles.join('')}
        </div>
        `
    );
}

export { GridFrameFourByFour };
