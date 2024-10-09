import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { IconButton } from '@shared-components/atoms/icon-button';

import './style.css';

function ApplicationTheme({ Game }) {
    const themeCurrent = Game.theme.currentName;
    const iconName = themeCurrent === 'light' ? iconMoon : iconSun;
    const iconButtonTheme = IconButton({ id: 'theme', name: iconName, size: 'small' });

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { ApplicationTheme };
