import { GameSettings } from '@shared-components/organisms/game-settings';

import './style.css';

function Screen({ children, Game }) {
    const gameSettings = GameSettings({ Game });

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
