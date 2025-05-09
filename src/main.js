import { PuzzleGridState } from '@core-controllers/puzzle-grid-context/main';
import { PuzzleGridShuffling } from '@core-controllers/puzzle-grid-shuffling/main';
import { PuzzleGridTiles } from '@core-controllers/puzzle-grid-tiles/main';

import { ScreenController } from '@core-controllers/screen/main';

import { GameModeSequentialPuzzlesController } from '@core-controllers/game-mode-sequential-puzzles/main';
import { StartScreenController } from '@core-controllers/start-screen-controller';
import { PracticeScreenController } from '@core-controllers/practice-screen-controller';

import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { PuzzleGridFactory } from '@core-factories/puzzle-grid/main';

import { ScreenState } from '@core-states/screen';
import { GameModeState } from '@core-states/game-mode';
import { createPuzzleState } from '@core-states/puzzle';
import { GameModeSequentialPuzzlesState } from '@core-states/game-mode-sequential-puzzles';

import { DomPuzzleGrid } from '@core-controllers/dom-puzzle-grid/main';
import { DomScreenSetupController } from '@core-controllers/screen-setup/main';
import { DomScreenManagement } from '@core-controllers/dom-screen-management/main';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';

import './main.css';


DomScreenSetupController.setup(ScreenController.goToScreen({
    screenId: SCREEN_ID_START,
    coreControllers: {
        PuzzleGridState,
        PuzzleGridShuffling,
        PuzzleGridTiles,
        ScreenController,
        GameModeSequentialPuzzlesController,
        PrefersColorSchemeController,
        StartScreenController,
        PracticeScreenController
    },
    coreFactories: {
        PuzzleGridFactory
    },
    coreState: {
        ScreenState,
        GameModeState,
        GameModeSequentialPuzzlesState,
        createPuzzleState
    },
    domActions: {
        DomPuzzleGrid,
        DomScreenSetupController,
        DomScreenManagement
    }
}));
