import './style.css';

function PuzzleTile({ id = undefined, symbol = '?', size = 'regular', playEnabled = false, selectable = false }) {

    return (
        `
        <div
            class="puzzle-tile"
            data-symbol=${symbol}
            data-id=${id}
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-selectable=${selectable}
        >
            ${symbol}
        </div>
        `
    );
}

export { PuzzleTile };
