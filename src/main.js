import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridFactory } from '@core-factories/puzzle-grid/main';
import { DomScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenController } from '@core-controllers/screen/main';
import { PuzzleSequenceController } from '@core-controllers/puzzle-sequence/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import './main.css';


DomScreenSetupController.setup(ScreenController.transitionTo({
    screenId: GAME_SCREEN_START,
    coreControllers: {
        GameModeController,
        DomScreenSetupController,
        ScreenController,
        PuzzleSequenceController,
        PuzzleGridController,
        PrefersColorSchemeController
    },
    coreFactories: {
        PuzzleGridFactory
    }
}));
