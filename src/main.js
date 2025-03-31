import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenModeController } from '@core-controllers/screen-mode/main';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import './main.css';


ScreenSetupController.routine(ScreenModeController.modes[GAME_SCREEN_START]());
