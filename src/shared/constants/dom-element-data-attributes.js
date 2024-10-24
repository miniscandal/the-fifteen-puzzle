const DATA_ATTR_PLAY_ENABLED = 'data-play-enabled';
const DATA_ATTR_MOVE_DIRECTION = 'data-movement-direction';
const DATA_ATTR_PLAY_ENABLED_TILE = '[data-play-enabled="true"][data-symbol]';
const DATA_ATTR_EMPTY_TILE = '[data-id="0"]';
const DATA_ATTR_SYMBOL_TILE = 'data-symbol';

const DATA_ATTR_INDEX_TILE = (index) => `[data-index="${index}"]`;

export {
    DATA_ATTR_PLAY_ENABLED,
    DATA_ATTR_MOVE_DIRECTION,
    DATA_ATTR_PLAY_ENABLED_TILE,
    DATA_ATTR_EMPTY_TILE,
    DATA_ATTR_INDEX_TILE,
    DATA_ATTR_SYMBOL_TILE
};
