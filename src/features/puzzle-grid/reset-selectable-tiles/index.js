import { DATA_ATTR_PLAY_ENABLED } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_MOVE_DIRECTION } from '@shared-constants/dom-element-data-attributes';


function resetSelectableTiles(tiles) {
    tiles.forEach(tile => {
        tile.setAttribute(DATA_ATTR_PLAY_ENABLED, false);
        tile.setAttribute(DATA_ATTR_MOVE_DIRECTION, null);
    });
}

export { resetSelectableTiles };
