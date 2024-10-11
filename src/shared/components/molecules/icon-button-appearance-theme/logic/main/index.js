import { iconMoon } from '@shared-components/atoms/icon-button/logic/constants/icon-name';
import { iconSun } from '@shared-components/atoms/icon-button/logic/constants/icon-name';

import { toggleColorScheme } from '@shared-helpers/toggle-color-scheme';
import { updateBodyPreferColorScheme } from '@shared-helpers/update-body-color-scheme';

import { LIGHT } from '@shared-constants/prefers-color-scheme';
import { PREFER_COLOR_SCHEME_ID } from '../constants/element-identifiers';

function updateIconButton(element, colorScheme) {
    element.dataset.name = colorScheme === LIGHT ? iconMoon : iconSun;
}

function iconButtonAppearanceTheme({ appearance }) {
    const iconButton = document.getElementById(PREFER_COLOR_SCHEME_ID);

    iconButton.addEventListener('click', function () {
        const themeColor = toggleColorScheme(appearance.theme);

        updateBodyPreferColorScheme(themeColor);
        updateIconButton(this, themeColor);

        appearance.theme.current = themeColor;
    });
}

export { iconButtonAppearanceTheme };
