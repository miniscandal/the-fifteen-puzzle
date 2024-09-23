import './style.css';

function PuzzleTile({ id = undefined, symbol = '?', size = 'regular', playEnabled = true }) {

    return (
        `
        <div class="puzzle-tile" data-symbol=${symbol} data-id=${id} data-size=${size} data-play-enabled=${playEnabled}>
            ${symbol}
        </div>
        `
    );
}

export { PuzzleTile };
