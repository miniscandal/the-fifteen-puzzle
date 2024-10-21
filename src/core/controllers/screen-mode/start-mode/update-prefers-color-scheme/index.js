import { updateAppearanceTheme } from '@feat-prefers-color-scheme/event-listener/update-appearance-theme';
import { updateBodyDataColorTheme } from '@feat-prefers-color-scheme/event-listener/update-body-color-theme';

import { toggleIconButtonColorTheme } from '@shared-components/molecules/icon-button-color-theme/logic';

import { getElementIconButtonColorTheme } from '@shared-dom-elements/buttons';
import { getDomElementBody } from '@shared-dom-elements/body';


function updatePrefersColorScheme(PrefersColorSchemeController) {
    const iconButton = getElementIconButtonColorTheme();

    iconButton.addEventListener('click', function () {
        const { appearance } = PrefersColorSchemeController;

        toggleIconButtonColorTheme.call(this);
        updateAppearanceTheme(appearance);
        updateBodyDataColorTheme(appearance, getDomElementBody());
    });
}

export { updatePrefersColorScheme };
