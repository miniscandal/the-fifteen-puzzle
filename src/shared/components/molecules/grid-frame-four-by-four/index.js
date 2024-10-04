import { PuzzleTile } from '@shared-components/atoms/puzzle-tile';

import './style.css';

function GridFrameFourByFour({
    playEnabled = false,
    size = 'regular',
    puzzle = { id: '', permutation: [] },
    puzzleTile = { size: 'auto', playEnabled: false }
}) {
    const { id = '', permutation = [] } = puzzle;

    const generatePermutation = () => {
        return Array.from({ length: 16 }, (_, index) => index);
    };

    const items = permutation.length ? permutation : generatePermutation();

    const ceroTile = permutation.reduce((previousValue, currentValue, currentIndex) => {
        return currentValue === 0 ? currentIndex : previousValue;
    });

    const row = Math.floor(ceroTile / 4);

    let selectableTiles = [];

    if (ceroTile - 1 >= 0) {
        if (row === Math.floor((ceroTile - 1) / 4)) {
            selectableTiles.push(ceroTile - 1);
        }
    }

    if (ceroTile + 1 <= 15) {
        if (row === Math.floor((ceroTile + 1) / 4)) {
            selectableTiles.push(ceroTile + 1);
        }

    }

    if (ceroTile - 4 >= 0) {
        selectableTiles.push(ceroTile - 4);
    }

    if (ceroTile + 4 <= 15) {
        selectableTiles.push(ceroTile + 4);
    }


    const puzzleTiles = items.map((symbol, index) => PuzzleTile({
        id: symbol,
        symbol: symbol,
        selectable: selectableTiles.includes(index),
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
