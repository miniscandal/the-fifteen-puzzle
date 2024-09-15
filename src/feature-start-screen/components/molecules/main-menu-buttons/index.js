import { ButtonSelectScreen } from '../../../../shared/components/atoms/button-select-screen';

function mainMenuButtonsLogic({ game, screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        game.screen.render(screens.practice({ game, screens }));
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
        <section>
            ${buttonElement.join('')}
        </section>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsLogic };
