import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { BTN_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PrimarySideBar({ coreState }) {
    const { ScreenState } = coreState;

    const buttonSelectBackScreen = ScreenState.history.length > 2
        ? ButtonSelectScreen({
            text: 'back',
            id: BTN_BACK_SCREEN_ID
        })
        : '';

    const buttonSelectStartScreen = ButtonSelectScreen({
        text: 'main menu',
        id: BTN_START_SCREEN_ID
    });


    return (
        `
        <section class="primary-side-bar">
            ${buttonSelectBackScreen}
            ${buttonSelectStartScreen}
        </section>
        `
    );
}

export { PrimarySideBar };
