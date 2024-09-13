import { IconButton } from '../../atoms/icon-button';
import { iconMoon } from '../../atoms/icon-button/variants';
import { iconHome } from '../../atoms/icon-button/variants';

import './style.css';

function gameScreenLogic({ game, screens }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const currentTheme = body.dataset.themeColor;
        body.dataset.themeColor = currentTheme === 'light' ? 'dark' : 'light';
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

function GameScreen({ children, game }) {
    const iconButtonTheme = IconButton({ id: 'theme', name: iconMoon, size: 'small' });
    const iconButtonMainMenu = game.screen.current !== 'start' ? '' : IconButton({ id: 'main-menu', name: iconHome, size: 'small' });

    return (
        `
        <div class="game-screen">
            <div>
                ${iconButtonTheme}
                ${iconButtonMainMenu}
            </div>
            ${children}
        </div>
        `
    );
}

export { GameScreen, gameScreenLogic };
