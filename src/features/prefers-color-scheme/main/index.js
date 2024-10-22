import { updateAppearanceTheme } from '../update-appearance-theme';
import { updateBodyDataColorTheme } from '../update-body-color-theme';

import { toggleIconButtonColorTheme } from '@shared-components/molecules/icon-button-color-theme/logic';

import { domElementIconButtonColorTheme } from '@shared-dom-elements/buttons';
import { getDomElementBody } from '@shared-dom-elements/body';


function prefersColorScheme(PrefersColorSchemeController) {
    const iconButton = domElementIconButtonColorTheme();

    iconButton.addEventListener('click', function () {
        const { appearance } = PrefersColorSchemeController;

        toggleIconButtonColorTheme.call(this);
        updateAppearanceTheme(appearance);
        updateBodyDataColorTheme(appearance, getDomElementBody());
    });
}

export { prefersColorScheme };
