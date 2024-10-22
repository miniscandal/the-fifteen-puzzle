import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { selectScreenMode } from '@feat-screen-mode/select-screen-mode';
import { prefersColorScheme } from '@feat-prefers-color-scheme/main';

import { domElementButtonSelectStartPractice } from '@shared-dom-elements/buttons';

import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';
import { START_SCREEN } from '@shared-constants/screen-modes';


function practiceMode({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const settings = {
        html: Practice(),
        uiFunctionality: function () {
            prefersColorScheme(PrefersColorSchemeController);

            const button = domElementButtonSelectStartPractice();

            button.addEventListener('click', function () {
                selectScreenMode({ screenMode: START_SCREEN, ScreenModeController, ScreenSetupController, PrefersColorSchemeController });
            });
        },
        screenName: PRACTICE_SCREEN
    };

    return settings;
}

export { practiceMode };
