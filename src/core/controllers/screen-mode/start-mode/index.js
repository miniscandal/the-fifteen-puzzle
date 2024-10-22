import { Start } from '@feat-screen-ui-start/components/pages/start';

import { selectScreenMode } from '@feat-screen-mode/select-screen-mode';
import { prefersColorScheme } from '@feat-prefers-color-scheme/main';

import { domElementButtonSelectScreenPractice } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';


function startMode({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const settings = {
        html: Start(),
        uiFunctionality: function () {
            prefersColorScheme(PrefersColorSchemeController)

            const button = domElementButtonSelectScreenPractice();

            button.addEventListener('click', function () {
                selectScreenMode({
                    screenMode: PRACTICE_SCREEN,
                    ScreenModeController,
                    ScreenSetupController,
                    PrefersColorSchemeController
                });
            });
        },
        screenName: START_SCREEN
    };

    return settings;
}

export { startMode };
