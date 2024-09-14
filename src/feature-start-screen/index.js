import { Screen } from '../shared/components/templates/screen';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { MainMenuButtons } from './components/organisms/main-menu-buttons';

function StartScreen({ game }) {
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

    return Screen({
        children,
        game
    });
}


export { StartScreen };
