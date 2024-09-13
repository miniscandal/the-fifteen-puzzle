import { TitleH2 } from '../../../../shared/components/atoms/title-h2';
import { ButtonSelectScreen } from '../../../../shared/components/atoms/button-select-screen';

function mainMenuButtonsLogic({ game, gameScreens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        gameScreens.practice({ game });
    });
}


function MainMenuButtons() {
    const titleH2 = TitleH2({
        text: 'Select Game Option'
    });

    const buttons = [
        { text: 'play', id: 'select-gameplay-screen' },
        { text: 'practice', id: 'select-practice-screen' },
        { text: 'help', id: 'select-help-screen' },
        { text: 'settings', id: 'select-settings-screen' },
    ];

    const buttonElement = buttons.map((properties) => ButtonSelectScreen(properties));

    return (
        `
        <div>
            ${titleH2}
            <div>
                ${buttonElement.join('')}
            </div>
        </div>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsLogic };
