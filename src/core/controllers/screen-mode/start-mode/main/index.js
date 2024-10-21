import { Start } from '@feat-screen-ui-start/components/pages/start';

import { updatePrefersColorScheme } from '../update-prefers-color-scheme';

import { START_SCREEN } from '@shared-constants/screen-names';


function startMode({ ScreenModeController, PrefersColorSchemeController }) {
    const settings = {
        html: Start(),
        uiFunctionality: function () {
            updatePrefersColorScheme(PrefersColorSchemeController);
        },
        screenName: START_SCREEN
    };

    return settings;
}

export { startMode };
