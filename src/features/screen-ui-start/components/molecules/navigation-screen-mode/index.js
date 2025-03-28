import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_GAME_SCREEN_PLAY_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_GAME_SCREEN_PRACTICE_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_HELP_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_SETTINGS_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function NavigationScreenMode() {
    const buttons = [
        {
            text: 'play',
            id: SELECT_GAME_SCREEN_PLAY_ID
        },
        {
            text: 'practice',
            id: SELECT_GAME_SCREEN_PRACTICE_ID
        },
        {
            text: 'help',
            id: SELECT_HELP_SCREEN_ID
        },
        {
            text: 'settings',
            id: SELECT_SETTINGS_SCREEN_ID
        },
    ];

    const buttonElements = buttons.map(properties => ButtonSelectScreen(properties));

    return (
        `   
        <div class="navigation-screen-mode">
            ${buttonElements.join('')}
        </div>
        `
    );
}

export { NavigationScreenMode };
