import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function mainMenuButtonsLogic({ Game, Screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.practice({ Game, Screens });
        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}

function MainMenuButtons() {
    const buttons = [
        { text: 'play', id: 'select-gameplay-screen' },
        { text: 'practice', id: 'select-practice-screen' },
        { text: 'help', id: 'select-help-screen' },
        { text: 'settings', id: 'select-settings-screen' },
    ];

    const buttonElement = buttons.map((properties) => ButtonSelectScreen(properties));

    return (
        `
        <div class="main-menu-buttons">
            ${buttonElement.join('')}
        </div>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsLogic };
