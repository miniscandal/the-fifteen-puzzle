import { GameScene } from '../shared/components/templates/game-scene';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { MainMenuButtons, mainMenuButtonsCode } from './components/organisms/main-menu-buttons';

function startScene({ game }) {
    game.scene.render(GameScene({ children: html() }));
    game.scene.functionality(mainMenuButtonsCode);
}

function html() {
    const titleH1 = TitleH1({
        text: 'The Fifteen Puzzle'
    });

    const mainMenuButtons = MainMenuButtons();
    return (
        `
        <div id="start">
            ${titleH1}
            ${mainMenuButtons}
        </div>
        `
    );
}


export { startScene };
