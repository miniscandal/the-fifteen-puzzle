import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';
import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenController } from '@core-controllers/screen/main';
import { PuzzleSequenceController } from '@core-controllers/puzzle-sequence/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import './main.css';


ScreenSetupController.setup(ScreenController.transitionTo({
    screenId: GAME_SCREEN_START,
    GameCoreControllers: {
        GameModeController,
        PuzzleGridController,
        ScreenSetupController,
        ScreenController,
        PuzzleSequenceController,
        PrefersColorSchemeController
    }
}));
