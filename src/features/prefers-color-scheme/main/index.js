import { domElementIconButtonColorTheme } from '@shared-dom-elements/buttons';
import { toggleIconButtonColorTheme } from '@shared-components/molecules/icon-button-color-theme/logic';
import { domElementBody } from '@shared-dom-elements/structural';

import { updateAppearanceTheme } from '../update-appearance-theme';
import { updateBodyDataColorTheme } from '../update-body-color-theme';


function prefersColorScheme(appearance) {
    const iconButton = domElementIconButtonColorTheme();

    iconButton.addEventListener('click', function () {
        toggleIconButtonColorTheme.call(this);
        updateAppearanceTheme(appearance);
        updateBodyDataColorTheme(appearance, domElementBody());
    });
}

export { prefersColorScheme };
