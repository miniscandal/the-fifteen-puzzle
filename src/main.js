import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';
import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import './main.css';


ScreenSetupController.routine(ScreenModeController.transitionTo({
    modeId: GAME_SCREEN_START,
    coreControllers: {
        ScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenModeController,
        PuzzleGridController
    }
}));
