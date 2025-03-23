import { DATA_ATTR_SYMBOL_TILE } from '@shared-constants/dom-element-data-attributes';


function validateSelectableTile(element) {
    const isTile = !!element && element.hasAttribute(DATA_ATTR_SYMBOL_TILE);
    const isSelectable = isTile && element.dataset.playEnabled === 'true';

    return isSelectable;
}

export { validateSelectableTile };
