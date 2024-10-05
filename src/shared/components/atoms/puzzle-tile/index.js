import './style.css';

function PuzzleTile({
    id = undefined,
    symbol = '?',
    size = 'regular',
    playEnabled = false,
    selectable = false,
    movementDirection = undefined
}) {

    return (
        `
        <div
            class="puzzle-tile"
            data-symbol=${symbol}
            data-id=${id}
            data-size=${size}
            data-play-enabled=${playEnabled}
            data-selectable=${selectable}
            data-movement-direction=${movementDirection}
        >
            ${symbol}
        </div>
        `
    );
}

export { PuzzleTile };
