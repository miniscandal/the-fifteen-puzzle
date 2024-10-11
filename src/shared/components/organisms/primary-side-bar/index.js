import { IconButtonToggleTheme } from '@shared-components/molecules/icon-button-toggle-theme';
import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { START } from '@core-screen-management/constants/screen-names';

import { SELECT_START_SCREEN_ID } from './logic/constants/element-identifiers';

import './style.css';

function PrimarySideBar({ appearance, screenSymbol }) {
    const iconButtonToggleTheme = IconButtonToggleTheme({ appearance });
    const buttonSelectScreen = screenSymbol !== START
        ? ButtonSelectScreen({ text: 'back', id: SELECT_START_SCREEN_ID })
        : '';

    return (
        `
        <section class="primary-side-bar">
            ${iconButtonToggleTheme}
            ${buttonSelectScreen}
        </section>
        `
    );
}

export { PrimarySideBar };
