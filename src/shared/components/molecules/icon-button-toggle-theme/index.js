import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { IconButton } from '@shared-components/atoms/icon-button';

import { LIGHT } from '@shared-constants/prefers-color-scheme';

import { PREFER_COLOR_SCHEME_ID } from './logic/constants/element-identifiers';

import './style.css';

function IconButtonToggleTheme({ appearance }) {
    const iconButtonTheme = IconButton({
        id: PREFER_COLOR_SCHEME_ID,
        name: appearance.theme.current === LIGHT ? iconMoon : iconSun,
        size: 'small'
    });

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { IconButtonToggleTheme };
