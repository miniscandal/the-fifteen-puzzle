import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_HELP_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_SETTINGS_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function NavigationScreenMode() {
    const buttons = [
        {
            text: 'play',
            id: SELECT_PLAY_SCREEN_ID
        },
        {
            text: 'practice',
            id: SELECT_PRACTICE_SCREEN_ID
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
