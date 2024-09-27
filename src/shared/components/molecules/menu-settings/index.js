import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function menuSettingsLogic({ Game, Screens }) {
    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, name } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    };

    if (Game.screen.currentName === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ Game, Screens });
        });
    }
}

function MenuSettings({ Game }) {
    const iconButtonMainMenu = Game.screen.currentName === 'start'
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
