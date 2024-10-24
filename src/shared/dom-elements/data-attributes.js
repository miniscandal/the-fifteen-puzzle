import { DATA_ATTR_PLAY_ENABLED_TILE } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_EMPTY_TILE } from '@shared-constants/dom-element-data-attributes';


const domElementPlayEnabledTiles = () => document.querySelectorAll(DATA_ATTR_PLAY_ENABLED_TILE);
const domElementEmptyTile = () => document.querySelector(DATA_ATTR_EMPTY_TILE);

export {
    domElementPlayEnabledTiles,
    domElementEmptyTile
};
