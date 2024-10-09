import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';

import './style.css';

function Screen({ children, Game, screenSymbol }) {
    const gameSettings = PrimarySideBar({ Game, screenSymbol });

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
