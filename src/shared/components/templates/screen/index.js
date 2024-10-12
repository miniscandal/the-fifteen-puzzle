import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';

import './style.css';

function Screen({ children, screenSymbol }) {
    const primarySideBar = PrimarySideBar({ screenSymbol });

    return (
        `
        <section class="screen">
            ${primarySideBar}
            ${children}
        </section>
        `
    );
}

export { Screen };
