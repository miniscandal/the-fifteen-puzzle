import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import './main.css';


const { html, uiFunctionality, screenName } = ScreenModeController.modes.start({
    ScreenModeController,
    PrefersColorSchemeController
});

ScreenSetupController.setupRoutine({
    html,
    uiFunctionality,
    screenName,
    ScreenModeController
});
