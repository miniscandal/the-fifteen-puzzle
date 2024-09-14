import { IconButton } from '../../atoms/icon-button';
import { iconHome, iconMoon } from '../../atoms/icon-button/variants';
import { iconSun } from '../../atoms/icon-button/variants';

import './style.css';

function gameScreenLogic({ game, screens }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const isLightTheme = body.dataset.themeColor === 'light';
        body.dataset.themeColor = isLightTheme ? 'dark' : 'light';

        const iconButtonTheme = document.getElementById('theme');
        iconButtonTheme.dataset.name = isLightTheme ? iconSun : iconMoon;
    };

    const mainMenu = ({ game, screens }) => {
        game.screen.render(screens.start({ game, screens }));
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);

    if (game.screen.current === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ game, screens });
        });
    }
}

function Screen({ children, game }) {
    const iconButtonTheme = IconButton({ id: 'theme', name: 'moon', size: 'small' });
    const iconButtonMainMenu = game.screen.current === 'start'
        ? IconButton({ id: 'main-menu', name: iconHome, size: 'small' })
        : '';

    return (
        `
        <div class="screen">
            <div>
                ${iconButtonTheme}
                ${iconButtonMainMenu}
            </div>
            ${children}
        </div>
        `
    );
}

export { Screen, gameScreenLogic };
