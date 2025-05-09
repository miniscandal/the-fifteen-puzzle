import { PuzzleGridState } from '@core-controllers/puzzle-grid-context-controller';
import { PuzzleGridShuffling } from '@core-controllers/puzzle-grid-shuffling-controller';
import { PuzzleGridTiles } from '@core-controllers/puzzle-grid-tiles-controller';

import { ScreenController } from '@core-controllers/screen/main';

import { GameModeSequentialPuzzlesController } from '@core-controllers/sequential-puzzles-game-mode-controller';
import { StartScreenController } from '@core-controllers/start-screen-controller';
import { PracticeScreenController } from '@core-controllers/practice-screen-controller';

import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme-controller';

import { PuzzleGridFactory } from '@core-factories/puzzle-grid';

import { ScreenState } from '@core-states/screen';
import { GameModeState } from '@core-states/game-mode';
import { createPuzzleState } from '@core-states/puzzle';
import { GameModeSequentialPuzzlesState } from '@core-states/game-mode-sequential-puzzles';

import { DomPuzzleGrid } from '@core-controllers/puzzle-grid-dom-controller';
import { DomScreenSetupController } from '@core-controllers/screen-setup-dom-controller';
import { DomScreenManagement } from '@core-controllers/screen-management-dom-controller';

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
