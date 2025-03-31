import { primarySideBar } from './variants';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_GAME_SCREEN_START_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';

function PrimarySideBar() {
    const buttonSelectStartScreen = primarySideBar.buttonSelectStartScreen
        ? ButtonSelectScreen({
            text: 'main menu',
            id: SELECT_GAME_SCREEN_START_ID
        })
        : '';


    const buttonSelectBackScreen = ButtonSelectScreen({
        text: 'back',
        id: SELECT_BACK_SCREEN_ID
    });

    return (
        `
        <section class="primary-side-bar">
            ${buttonSelectStartScreen}
            ${buttonSelectBackScreen}
        </section>
        `
    );
}

export { PrimarySideBar };
