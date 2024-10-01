import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';
import { selectStartScreen } from '@core-game-management/select-screen';

function menuSettingsLogic({ Game, Screens, screenId }) {
    selectStartScreen({ Game, Screens, screenId });
}

function MenuSettings({ screenId }) {
    if (screenId === 'start') {
        return '';
    }

    const iconButtonMainMenu = ButtonSelectScreen({ text: 'back', id: 'back' });

    return (
        `
        <div>
            ${iconButtonMainMenu}
        </div>
        `
    );
}

export { MenuSettings, menuSettingsLogic };
