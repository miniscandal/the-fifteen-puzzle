import { SquareTile } from '../../../../shared/components/atoms/square-tile';

import './style.css';

function GridFrameFourByFour({ play = false, unit = 4, size = 'regualr' }) {
    const data = Array.from({ length: 4 * 4 }, (_, index) => index);

    const squareTile = data.map((_, index) => SquareTile({ id: index, symbol: index }));

    return (
        `
        <div class="grid-frame-four-by-four" data-size=${size} data-play=${play}>
            ${squareTile.join('')}
        </div>
        `
    );
}

export { GridFrameFourByFour };
