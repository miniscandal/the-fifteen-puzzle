import { Start } from '@feat-screen-ui-start/components/pages/start';

import { selectPracticeScreen } from '@feat-screen-mode/select-practice-screen';

import { updatePrefersColorScheme } from '../update-prefers-color-scheme';

import { getElementButtonSelectScreenPractice } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-names';


function startMode({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const settings = {
        html: Start(),
        uiFunctionality: function () {
            updatePrefersColorScheme(PrefersColorSchemeController);

            const button = getElementButtonSelectScreenPractice();

            button.addEventListener('click', function () {
                selectPracticeScreen({
                    ScreenModeController, ScreenSetupController, PrefersColorSchemeController
                });
            });
        },
        screenName: START_SCREEN
    };

    return settings;
}

export { startMode };
