import { PrimarySideBar } from '@shared-components/organisms/primary-side-bar';
import { IconButtonColorTheme } from '@shared-components/molecules/icon-button-color-theme';

import './style.css';

function ScreenMode({
    children = '',
    enablePrimarySideBar = true
}) {
    const primarySideBar = enablePrimarySideBar ? PrimarySideBar() : '';
    const iconButtonAppearanceTheme = IconButtonColorTheme();

    return (
        `
        <section class="screen-mode">
            <header class="screen-mode__header">
                ${iconButtonAppearanceTheme}
                ${primarySideBar}
            </header>
            ${children}
        </section>
        `
    );
}

export { ScreenMode };
