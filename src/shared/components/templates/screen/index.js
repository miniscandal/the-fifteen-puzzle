import { GameSettings } from '@shared-components/organisms/game-settings';

import './style.css';

function Screen({ children, game }) {
    const gameSettings = GameSettings({ game });

    return (
        `
        <section class="screen">
            ${gameSettings}
            ${children}
        </section>
        `
    );
}

export { Screen };
