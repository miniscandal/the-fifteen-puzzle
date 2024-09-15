import { iconMoon } from '../../atoms/icon-button/variants';
import { iconSun } from '../../atoms/icon-button/variants';
import { IconButton } from '../../atoms/icon-button';

import './style.css';

function applicationTheme() {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const isLightTheme = body.dataset.themeColor === 'light';
        body.dataset.themeColor = isLightTheme ? 'dark' : 'light';

        const iconButtonTheme = document.getElementById('theme');
        iconButtonTheme.dataset.name = isLightTheme ? iconSun : iconMoon;
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

function ApplicationTheme() {
    const iconButtonTheme = IconButton({ id: 'theme', name: 'moon', size: 'small' });

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { ApplicationTheme, applicationTheme };
