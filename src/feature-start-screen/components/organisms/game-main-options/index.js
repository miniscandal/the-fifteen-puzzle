import { TitleH2 } from '../../../../shared/components/atoms/title-h2';
import { MainMenuButtons } from '../../molecules/main-menu-buttons';

import './style.css';

function GameMainOptions() {
    const titleH2 = TitleH2({
        text: 'Select Game Option'
    });
    const mainMenuButtons = MainMenuButtons();

    return (
        `
        <section>
            ${titleH2}
            ${mainMenuButtons}
        </section>
        `
    );
}

export { GameMainOptions };
