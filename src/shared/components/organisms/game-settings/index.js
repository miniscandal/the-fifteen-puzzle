import { ApplicationTheme } from '@shared-components/molecules/application-theme';
import { MenuSettings } from '@shared-components/molecules/menu-settings';

import { applicationThemeLogic } from '@shared-components/molecules/application-theme';
import { menuSettingsLogic } from '@shared-components/molecules/menu-settings';

import './style.css';

function gameSettingsLogic({ game, screens }) {
    applicationThemeLogic({ game });
    menuSettingsLogic({ game, screens });
}

function GameSettings({ game }) {
    const applicationTheme = ApplicationTheme({ game });
    const menuSettings = MenuSettings({ game });

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
