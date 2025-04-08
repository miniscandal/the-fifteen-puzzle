import './style.css';

function PuzzleTile({
    id = null,
    symbol = '',
    size = 'regular',
    playEnabled = false,
    movementDirection = undefined,
    row = undefined,
    column = undefined,
    index = undefined
}) {

    return (
        `
        <div
            class="puzzle-tile"
            data-symbol=${symbol}
            data-id=${id}
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-movement-direction=${movementDirection}
            data-row=${row}
            data-column=${column}
            data-index=${index}
        >
            ${symbol}
        </div>
        `
    );
}

export { PuzzleTile };
