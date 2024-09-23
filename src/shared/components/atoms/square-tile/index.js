import './style.css';

function SquareTile({ id = undefined, symbol = '?', size = 'regular', playEnabled = true }) {

    return (
        `
        <div class="square-tile" data-symbol=${symbol} data-id=${id} data-size=${size} data-play-enabled=${playEnabled}>
            ${symbol}
        </div>
        `
    );
}

export { SquareTile };
