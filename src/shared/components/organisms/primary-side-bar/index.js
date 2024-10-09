import { ApplicationTheme } from '@shared-components/molecules/application-theme';
import { NavigationMenu } from '@shared-components/molecules/navigation-menu';

import './style.css';

function PrimarySideBar({ Game, screenSymbol }) {
    const applicationTheme = ApplicationTheme({ Game });
    const menuSettings = NavigationMenu({ screenSymbol });

    return (
        `
        <section class="primary-side-bar">
            ${applicationTheme}
            ${menuSettings}
        </section>
        `
    );
}

export { PrimarySideBar };
