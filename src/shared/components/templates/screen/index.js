import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';

import './style.css';

function Screen({ children, Game, screenId }) {
    const gameSettings = PrimarySideBar({ Game, screenId });

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
