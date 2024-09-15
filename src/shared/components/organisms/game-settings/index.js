import { applicationTheme, ApplicationTheme } from '../../molecules/application-theme';
import { MenuSettings, menuSettingsLogic } from '../../molecules/menu-settings';

import './style.css';

function gameSettingsLogic({ game, screens }) {
    applicationTheme();
    menuSettingsLogic({ game, screens });
}

function GameSettings({ game }) {
    const applicationTheme = ApplicationTheme();
    const menuSettings = MenuSettings({ game });

    return (
        `
        <section>
            ${applicationTheme}
            ${menuSettings}
        </section>
        `
    );
}

export { GameSettings, gameSettingsLogic };
