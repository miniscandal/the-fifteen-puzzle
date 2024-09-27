import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { IconButton } from '@shared-components/atoms/icon-button';

import './style.css';

function applicationThemeLogic({ Game }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const isLightTheme = body.dataset.themeColor === 'light';
        body.dataset.themeColor = isLightTheme ? 'dark' : 'light';
        Game.theme.currentName = body.dataset.themeColor;

        const iconButtonTheme = document.getElementById('theme');
        iconButtonTheme.dataset.name = isLightTheme ? iconSun : iconMoon;
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

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

export { ApplicationTheme, applicationThemeLogic };
