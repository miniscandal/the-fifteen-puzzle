import { GameSettings } from '@shared-components/organisms/game-settings';

import './style.css';

function Screen({ children, Game, screenId }) {
    const gameSettings = GameSettings({ Game, screenId });

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
