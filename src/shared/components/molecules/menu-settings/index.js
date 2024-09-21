import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

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
        ? ButtonSelectScreen({ text: 'end game', id: 'main-menu' })
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
