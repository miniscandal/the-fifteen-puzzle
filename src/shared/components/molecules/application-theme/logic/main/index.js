import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';
import { DARK } from '@shared-constants/prefers-color-scheme';
import { LIGHT } from '@shared-constants/prefers-color-scheme';
import { PREFER_COLOR_SCHEME_ID } from '../constants/icon-button-identifiers';



function applicationTheme({ Game }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const isLightTheme = body.dataset.themeColor === LIGHT;
        body.dataset.themeColor = isLightTheme ? DARK : LIGHT;
        Game.theme.currentName = body.dataset.themeColor;

        const iconButtonTheme = document.getElementById(PREFER_COLOR_SCHEME_ID);
        iconButtonTheme.dataset.name = isLightTheme ? iconSun : iconMoon;
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

export { applicationTheme };


// IMPLEMENT Function, REMOVE ARROW FUNCTION
