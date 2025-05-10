import { PrefersColorSchemeState } from '@core-states/prefers-color-scheme-state';

import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';

import { COLOR_THEME_ID } from '@shared-constants/dom-element-identifiers';
import { LIGHT_THEME } from '@shared-constants/color-themes';

const iconButtonColorTheme = {
    get iconButton() {
        return {
            id: COLOR_THEME_ID,
            name: PrefersColorSchemeState.appearance.theme.current === LIGHT_THEME ? iconMoon : iconSun,
            size: 'small'
        };
    }
};

export { iconButtonColorTheme };
