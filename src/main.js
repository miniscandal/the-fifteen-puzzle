import { PuzzleGridFactory } from '@core-factories/puzzle-grid/main';

import { DomScreenSetupController } from '@core-controllers/screen-setup/main';
import { ScreenController } from '@core-controllers/screen/main';
import { PuzzleSequenceController } from '@core-controllers/puzzle-sequence/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';
import { DomPuzzleGrid } from '@core-controllers/dom-puzzle-grid/main';

import { ScreenState } from '@core-states/screen';
import { GameModeState } from '@core-states/game-mode';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import './main.css';


DomScreenSetupController.setup(ScreenController.goToScreen({
    screenId: GAME_SCREEN_START,
    coreControllers: {
        PuzzleGridController,
        DomScreenSetupController,
        ScreenController,
        PuzzleSequenceController,
        PrefersColorSchemeController,
    },
    coreFactories: {
        PuzzleGridFactory
    },
    coreState: {
        ScreenState,
        GameModeState
    },
    domActions: {
        DomPuzzleGrid
    }
}));
