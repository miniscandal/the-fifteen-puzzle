import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { IconButton } from '@shared-components/atoms/icon-button';

import { LIGHT } from '@shared-constants/prefers-color-scheme';
import { PREFER_COLOR_SCHEME_ID } from './logic/constants/icon-button-identifiers';

import './style.css';

function IconButtonToggleTheme({ Game }) {
    const themeCurrent = Game.theme.currentName;
    const iconName = themeCurrent === LIGHT ? iconMoon : iconSun;
    const iconButtonTheme = IconButton({ id: PREFER_COLOR_SCHEME_ID, name: iconName, size: 'small' });

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { IconButtonToggleTheme };
