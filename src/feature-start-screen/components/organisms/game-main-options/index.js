import { MainMenuButtons } from '../../molecules/main-menu-buttons';

import './style.css';

function GameMainOptions() {
    const mainMenuButtons = MainMenuButtons();

    return (
        `
        <section>
        ${mainMenuButtons}
        </section>
        `
    );
}

export { GameMainOptions };
