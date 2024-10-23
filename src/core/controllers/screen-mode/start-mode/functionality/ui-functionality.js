import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { selectScreenMode } from '@feat-screen-mode/select-screen-mode';
import { domElementButtonSelectScreenPractice } from '@shared-dom-elements/buttons';

import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';

function startModeFunctionality({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    prefersColorScheme(PrefersColorSchemeController);

    const button = domElementButtonSelectScreenPractice();

    button.addEventListener('click', function () {
        selectScreenMode({
            screenMode: PRACTICE_SCREEN,
            ScreenModeController,
            ScreenSetupController,
            PrefersColorSchemeController
        });
    });
}

export { startModeFunctionality };
