import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function PrimarySideBar() {
    const buttonSelectScreen = ButtonSelectScreen({
        text: 'main menu',
        id: SELECT_START_SCREEN_ID
    });

    return (
        `
        <section class="primary-side-bar">
            ${buttonSelectScreen}
        </section>
        `
    );
}

export { PrimarySideBar };
