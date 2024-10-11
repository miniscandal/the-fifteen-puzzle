import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';

import { toggleColorScheme } from '@shared-helpers/toggle-color-scheme';
import { updateBodyPreferColorScheme } from '@shared-helpers/update-body-color-scheme';

import { LIGHT } from '@shared-constants/prefers-color-scheme';
import { PREFER_COLOR_SCHEME_ID } from '../constants/icon-button-identifiers';

function updateIconButton(element, colorScheme) {
    element.dataset.name = colorScheme === LIGHT ? iconMoon : iconSun;
}

function iconButtonToggleColorScheme({ Game }) {
    const iconButton = document.getElementById(PREFER_COLOR_SCHEME_ID);

    iconButton.addEventListener('click', function () {
        const themeColor = toggleColorScheme(Game.theme);

        updateBodyPreferColorScheme(themeColor);
        updateIconButton(this, themeColor);

        Game.theme.currentName = themeColor;
    });
}

export { iconButtonToggleColorScheme };
