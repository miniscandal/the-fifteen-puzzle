import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { BTN_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_HELP_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_SETTINGS_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function NavigationScreenMode() {
    const buttons = [
        {
            text: 'play',
            id: BTN_PLAY_SCREEN_ID
        },
        {
            text: 'practice',
            id: BTN_PRACTICE_SCREEN_ID
        },
        {
            text: 'help',
            id: BTN_HELP_SCREEN_ID
        },
        {
            text: 'settings',
            id: BTN_SETTINGS_SCREEN_ID
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
