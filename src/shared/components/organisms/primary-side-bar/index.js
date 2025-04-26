import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { SELECT_GAME_SCREEN_START_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import './style.css';


function PrimarySideBar({ coreState }) {
    const { ScreenState } = coreState;

    const buttonSelectBackScreen = ScreenState.history.length > 2
        ? ButtonSelectScreen({
            text: 'back',
            id: SELECT_BACK_SCREEN_ID
        })
        : '';

    const buttonSelectStartScreen = ButtonSelectScreen({
        text: 'main menu',
        id: SELECT_GAME_SCREEN_START_ID
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
