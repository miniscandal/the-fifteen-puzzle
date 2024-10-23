import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { selectScreenMode } from '@feat-screen-mode/select-screen-mode';
import { domElementButtonSelectStartPractice } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';

function practiceModeFunctionality({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    prefersColorScheme(PrefersColorSchemeController);

    const button = domElementButtonSelectStartPractice();

    button.addEventListener('click', function () {
        selectScreenMode({
            screenMode: START_SCREEN,
            ScreenModeController,
            ScreenSetupController,
            PrefersColorSchemeController
        });
    });
}

export { practiceModeFunctionality };
