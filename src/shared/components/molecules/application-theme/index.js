import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { IconButton } from '@shared-components/atoms/icon-button';

import './style.css';

function applicationThemeLogic({ game }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const isLightTheme = body.dataset.themeColor === 'light';
        body.dataset.themeColor = isLightTheme ? 'dark' : 'light';
        game.theme.current = body.dataset.themeColor;

        const iconButtonTheme = document.getElementById('theme');
        iconButtonTheme.dataset.name = isLightTheme ? iconSun : iconMoon;
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

function ApplicationTheme({ game }) {
    const themeCurrent = game.theme.current;
    const iconButtonTheme = IconButton({ id: 'theme', name: themeCurrent === 'light' ? iconMoon : iconSun, size: 'small' });

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { ApplicationTheme, applicationThemeLogic };
