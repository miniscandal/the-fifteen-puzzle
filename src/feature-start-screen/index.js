import { GameScreen, gameScreenLogic } from '../shared/components/templates/game-screen';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { MainMenuButtons, mainMenuButtonsLogic } from './components/organisms/main-menu-buttons';

function startScreen({ game }) {
    game.screen.render(GameScreen({ children: html() }));
    game.screen.logic(() => {
        gameScreenLogic();
        mainMenuButtonsLogic({ game });
    });
}

function html() {
    const titleH1 = TitleH1({
        text: 'The Fifteen Puzzle'
    });

    const mainMenuButtons = MainMenuButtons();

    return (
        `
        <div>
            ${titleH1}
            ${mainMenuButtons}
        </div>
        `
    );
}


export { startScreen };
