import { PuzzleGridState } from '@core-controllers/puzzle-grid-context-controller';
import { PuzzleGridShuffling } from '@core-controllers/puzzle-grid-shuffling-controller';
import { PuzzleGridTiles } from '@core-controllers/puzzle-grid-tiles-controller';

import { ScreenNavigatorController } from '@core-controllers/screen-navigator-controller';
import { GameModeSequentialPuzzlesController } from '@core-controllers/sequential-puzzles-game-mode-controller';
import { StartScreenController } from '@core-controllers/start-screen-controller';
import { PracticeScreenController } from '@core-controllers/practice-screen-controller';
import { PuzzleGridDomController } from '@core-controllers/puzzle-grid-dom-controller';
import { ScreenSetupDomController } from '@core-controllers/screen-setup-dom-controller';
import { ScreenManagementDomController } from '@core-controllers/screen-management-dom-controller';

import { PuzzleGridFactory } from '@core-factories/puzzle-grid-factory';

import { ScreenState } from '@core-states/screen-state';
import { GameModeState } from '@core-states/game-mode-state';
import { GameModeSequentialPuzzlesState } from '@core-states/game-mode-sequential-puzzles-state';
import { UserPreferencesState } from '@core-states/user-preferences-state';

import { createPuzzleState } from '@core-states/puzzle-state';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';

import './main.css';


ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
    screenId: SCREEN_ID_START,
    coreControllers: {
        PuzzleGridState,
        PuzzleGridShuffling,
        PuzzleGridTiles,
        ScreenNavigatorController,
        GameModeSequentialPuzzlesController,
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
        UserPreferencesState,
        createPuzzleState
    },
    domActions: {
        PuzzleGridDomController,
        ScreenSetupDomController,
        ScreenManagementDomController
    }
}));
