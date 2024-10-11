import { Game } from '@core-game-management/main';

import { PREFER_COLOR_SCHEME_ID } from '@shared-components/molecules/icon-button-appearance-theme/logic/constants/element-identifiers';

import { iconMoon } from './logic/constants/icon-name';
import { iconSun } from './logic/constants/icon-name';
import { LIGHT } from '@shared-constants/prefers-color-scheme';

const iconButtonAppearanceTheme = {
    get variant() {
        return {
            id: PREFER_COLOR_SCHEME_ID,
            name: Game.appearance.theme.current === LIGHT ? iconMoon : iconSun,
            size: 'small'
        };
    }
};

export { iconButtonAppearanceTheme };
