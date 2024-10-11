import { IconButtonAppearanceTheme } from '@shared-components/molecules/icon-button-appearance-theme';
import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { START } from '@core-screen-management/constants/screen-names';

import { SELECT_START_SCREEN_ID } from './logic/constants/element-identifiers';

import './style.css';

function PrimarySideBar({ screenSymbol }) {
    const iconButtonAppearanceTheme = IconButtonAppearanceTheme();
    const buttonSelectScreen = screenSymbol !== START
        ? ButtonSelectScreen({ text: 'back', id: SELECT_START_SCREEN_ID })
        : '';

    return (
        `
        <section class="primary-side-bar">
            ${iconButtonAppearanceTheme}
            ${buttonSelectScreen}
        </section>
        `
    );
}

export { PrimarySideBar };
