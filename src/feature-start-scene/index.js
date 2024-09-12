import { GameScene, gameSceneLogic } from '../shared/components/templates/game-scene';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { MainMenuButtons, mainMenuButtonsLogic } from './components/organisms/main-menu-buttons';

function startScene({ game }) {
    game.scene.render(GameScene({ children: html() }));
    game.scene.logic(() => {
        gameSceneLogic();
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
        <div id="start">
            ${titleH1}
            ${mainMenuButtons}
        </div>
        `
    );
}


export { startScene };
