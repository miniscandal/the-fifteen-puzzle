import './style.css';


function PuzzleTile({
    id = 'puzzle-tile',
    symbol = '?',
    size = 'regular',
    playEnabled = false,
    movementDirection = null,
    row = null,
    column = null,
    index = null
}) {

    return (
        `
        <div
            class="puzzle-tile ${size}"
            data-symbol=${symbol}
            data-id=${id}
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
