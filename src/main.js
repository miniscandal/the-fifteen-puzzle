import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { selectScreenMode } from '@feat-screen-mode/select-screen-mode';

import { START_SCREEN } from '@shared-constants/screen-modes';

import './main.css';


selectScreenMode({ screenMode: START_SCREEN, ScreenModeController, ScreenSetupController, PrefersColorSchemeController });
