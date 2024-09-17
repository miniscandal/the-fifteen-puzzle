import './style.css';

function SquareTile({ id = undefined, symbol = '?' }) {

    return (
        `
        <div class="square-tile" data-symbol=${symbol} data-id=${id}>
            ${symbol}
        </div>
        `
    );
}

export { SquareTile };
