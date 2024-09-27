import { ApplicationTheme } from '@shared-components/molecules/application-theme';
import { MenuSettings } from '@shared-components/molecules/menu-settings';

import { applicationThemeLogic } from '@shared-components/molecules/application-theme';
import { menuSettingsLogic } from '@shared-components/molecules/menu-settings';

import './style.css';

function gameSettingsLogic({ Game, Screens }) {
    applicationThemeLogic({ Game });
    menuSettingsLogic({ Game, Screens });
}

function GameSettings({ Game }) {
    const applicationTheme = ApplicationTheme({ Game });
    const menuSettings = MenuSettings({ Game });

    return (
        `
        <section class="game-settings">
            ${applicationTheme}
            ${menuSettings}
        </section>
        `
    );
}

export { GameSettings, gameSettingsLogic };
