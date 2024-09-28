import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function menuSettingsLogic({ Game, Screens, screenId }) {
    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, name } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    };

    if (screenId === 'start') {
        return;
    }

    document.getElementById('back').addEventListener('click', () => {
        mainMenu({ Game, Screens });
    });
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
