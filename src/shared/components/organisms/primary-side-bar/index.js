import { IconButtonToggleTheme } from '@shared-components/molecules/icon-button-toggle-theme';
import { NavigationMenu } from '@shared-components/molecules/navigation-menu';

import './style.css';

function PrimarySideBar({ Game, screenSymbol }) {
    const iconButtonToggleTheme = IconButtonToggleTheme({ Game });
    const menuSettings = NavigationMenu({ screenSymbol });

    return (
        `
        <section class="primary-side-bar">
            ${iconButtonToggleTheme}
            ${menuSettings}
        </section>
        `
    );
}

export { PrimarySideBar };
