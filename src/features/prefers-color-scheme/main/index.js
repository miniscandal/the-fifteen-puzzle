import { toggleIconButtonColorTheme } from '@shared-components/molecules/icon-button-color-theme/logic';
import { domElementIconButtonColorTheme } from '@shared-dom-elements/buttons';
import { domElementBody } from '@shared-dom-elements/structural';

import { updateAppearanceTheme } from '../update-appearance-theme';
import { updateBodyDataColorTheme } from '../update-body-color-theme';


function prefersColorScheme(PrefersColorSchemeController) {
    const iconButton = domElementIconButtonColorTheme();

    iconButton.addEventListener('click', function () {
        const { appearance } = PrefersColorSchemeController;

        toggleIconButtonColorTheme.call(this);
        updateAppearanceTheme(appearance);
        updateBodyDataColorTheme(appearance, domElementBody());
    });
}

export { prefersColorScheme };
