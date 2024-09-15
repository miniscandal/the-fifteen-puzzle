import { IconButton } from '../../atoms/icon-button';
import { iconHome } from '../../atoms/icon-button/variants';

import './style.css';

function menuSettingsLogic({ game, screens }) {
    const mainMenu = ({ game, screens }) => {
        game.screen.render(screens.start({ game, screens }));
    };

    if (game.screen.current === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ game, screens });
        });
    }
}

function MenuSettings({ game }) {
    const iconButtonMainMenu = game.screen.current === 'start'
        ? IconButton({ id: 'main-menu', name: iconHome, size: 'small' })
        : '';

    return (
        `
        <div>
        ${iconButtonMainMenu}
        </div>
        `
    );
}

export { MenuSettings, menuSettingsLogic };
