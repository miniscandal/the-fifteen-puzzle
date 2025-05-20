import { DATA_ATTR_PLAY_ENABLED_TILE } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_EMPTY_TILE } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_INDEX_TILE } from '@shared-constants/dom-element-data-attributes';


const DataAttributeDomElementsAccessor = {
    getPlayEnabledTiles: () => document.querySelectorAll(DATA_ATTR_PLAY_ENABLED_TILE),
    getEmptyTile: () => document.querySelector(DATA_ATTR_EMPTY_TILE),
    getTileByIndex: (index) => document.querySelector(DATA_ATTR_INDEX_TILE(index))
};

export { DataAttributeDomElementsAccessor };
