import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';

import { START_SCREEN } from '@shared-constants/screen-modes';

import './main.css';

updateScreenMode({
    screenMode: START_SCREEN,
    ScreenModeController,
    ScreenSetupController,
    PrefersColorSchemeController
});
