import { GameScreen } from '../shared/components/templates/game-screen';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { MainMenuButtons } from './components/organisms/main-menu-buttons';

function StartScreen() {
    const titleH1 = TitleH1({
        text: 'The Fifteen Puzzle'
    });

    const mainMenuButtons = MainMenuButtons();

    const children = (
        `
        <div>
            ${titleH1}
            ${mainMenuButtons}
        </div>
        `
    );

    return GameScreen({
        children
    });
}


export { StartScreen };
