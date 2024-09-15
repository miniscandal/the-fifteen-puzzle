import { applicationTheme, ApplicationTheme } from '../../molecules/application-theme';
import { MenuSettings, menuSettingsLogic } from '../../molecules/menu-settings';

import './style.css';

function gameSettingsLogic({ game, screens }) {
    applicationTheme({ game });
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
