import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function Navigation() {
    const buttons = [
        { text: 'play', id: 'select-play-screen' },
        { text: 'practice', id: 'select-practice-screen' },
        { text: 'help', id: 'select-help-screen' },
        { text: 'settings', id: 'select-settings-screen' },
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
