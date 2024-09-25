import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function menuSettingsLogic({ Game, Screens }) {
    const mainMenu = ({ Game, Screens }) => {
        Game.screen.render(Screens.start({ Game, Screens }));
    };

    if (Game.screen.current === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ Game, Screens });
        });
    }
}

function MenuSettings({ Game }) {
    const iconButtonMainMenu = Game.screen.current === 'start'
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
