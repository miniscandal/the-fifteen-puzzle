import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenModeController } from '@core-controllers/screen-mode/main';

import { START_SCREEN } from '@shared-constants/screen-modes';

import './main.css';


ScreenSetupController.routine(ScreenModeController.modes[START_SCREEN]());
