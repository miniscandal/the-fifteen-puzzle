import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { selectStartScreen } from '@feat-screen-mode/select-start-screen';

import './main.css';

selectStartScreen({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController });
