import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_PLAY_SCREEN_ID } from './logic/constants/element-identifiers';
import { SELECT_PRACTICE_SCREEN_ID } from './logic/constants/element-identifiers';
import { SELECT_HELP_SCREEN_ID } from './logic/constants/element-identifiers';
import { SELECT_SETTINGS_SCREEN_ID } from './logic/constants/element-identifiers';

import './style.css';

function Navigation() {
    const buttons = [
        { text: 'play', id: SELECT_PLAY_SCREEN_ID },
        { text: 'practice', id: SELECT_PRACTICE_SCREEN_ID },
        { text: 'help', id: SELECT_HELP_SCREEN_ID },
        { text: 'settings', id: SELECT_SETTINGS_SCREEN_ID },
    ];

    const buttonElements = buttons.map((properties) => ButtonSelectScreen(properties));

    return (
        `   
        <div class="navigation">
            ${buttonElements.join('')}
        </div>
        `
    );
}

export { Navigation };
