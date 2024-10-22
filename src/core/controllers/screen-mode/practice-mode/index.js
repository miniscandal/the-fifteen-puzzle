import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { selectStartScreen } from '@feat-screen-mode/select-start-screen';

import { getElementButtonSelectStartPractice } from '@shared-dom-elements/buttons';

import { PRACTICE_SCREEN } from '@shared-constants/screen-names';
import { updatePrefersColorScheme } from '../start-mode/update-prefers-color-scheme';


function practiceMode({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const settings = {
        html: Practice(),
        uiFunctionality: function () {
            updatePrefersColorScheme(PrefersColorSchemeController);

            const button = getElementButtonSelectStartPractice();

            button.addEventListener('click', function () {
                selectStartScreen({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController });
            });
        },
        screenName: PRACTICE_SCREEN
    };

    return settings;
}

export { practiceMode };
