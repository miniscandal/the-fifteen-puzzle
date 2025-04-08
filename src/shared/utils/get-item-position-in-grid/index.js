import { calculateIndexPositionInGrid } from '@shared-utils/calculate-index-position-in-grid';

import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';


function getItemPositionInGrid(items) {
    const index = items.findIndex(value => value === EMPTY_TILE_VALUE);

    const indexPosition = {
        index,
        ...calculateIndexPositionInGrid(index)
    };

    return indexPosition;
}

export { getItemPositionInGrid };
