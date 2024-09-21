import { TitleH2 } from '@shared-components/atoms/title-h2';
import { MainMenuButtons } from '../../molecules/main-menu-buttons';

import './style.css';

function GameMainOptions() {
    const titleH2 = TitleH2({
        text: 'GAME OPTIONS'
    });
    const mainMenuButtons = MainMenuButtons();

    return (
        `
        <section class="game-main-options">
            ${titleH2}
            ${mainMenuButtons}
        </section>
        `
    );
}

export { GameMainOptions };
