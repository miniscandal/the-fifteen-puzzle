import { MainMenuButtons, mainMenuButtonsCode } from './components/organisms/main-menu-buttons';

function startScene({ game }) {
    game.scene(html());

    mainMenuButtonsCode();
}

function html() {
    const mainMenuButtons = MainMenuButtons();
    return (
        `
        <div id="start">
            ${mainMenuButtons}
        </div>
        `
    );
}


export { startScene };
