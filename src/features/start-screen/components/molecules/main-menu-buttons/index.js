import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { selectPlayScreen, selectPracticeScreen } from '@core-game-management/select-screen';

import './style.css';

function mainMenuButtonsLogic({ Game, Screens }) {
    selectPracticeScreen({ Game, Screens });
    selectPlayScreen({ Game, Screens });
}

function MainMenuButtons() {
    const buttons = [
        { text: 'play', id: 'select-play-screen' },
        { text: 'practice', id: 'select-practice-screen' },
        { text: 'help', id: 'select-help-screen' },
        { text: 'settings', id: 'select-settings-screen' },
    ];

    const buttonElements = buttons.map((properties) => ButtonSelectScreen(properties));

    return (
        `   
        <div class="main-menu-buttons">
            ${buttonElements.join('')}
        </div>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsLogic };
