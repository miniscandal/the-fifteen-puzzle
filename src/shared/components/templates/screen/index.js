import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';

import './style.css';

function Screen({ children, screenSymbol }) {
    const gameSettings = PrimarySideBar({ screenSymbol });

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
