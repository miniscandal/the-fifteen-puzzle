import { ApplicationTheme } from '@shared-components/molecules/application-theme';
import { NavigationMenu } from '@shared-components/molecules/navigation-menu';

import './style.css';

function PrimarySideBar({ Game, screenId }) {
    const applicationTheme = ApplicationTheme({ Game });
    const menuSettings = NavigationMenu({ screenId });

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
