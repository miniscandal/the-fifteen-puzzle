import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';

import './style.css';

function Screen({ children, appearance, screenSymbol }) {
    const gameSettings = PrimarySideBar({ appearance, screenSymbol });

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
