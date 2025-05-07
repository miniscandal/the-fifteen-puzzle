import { PuzzleGridState } from '@core-controllers/puzzle-grid-context/main';
import { PuzzleGridShuffling } from '@core-controllers/puzzle-grid-shuffling/main';
import { PuzzleGridTiles } from '@core-controllers/puzzle-grid-tiles/main';

import { ScreenController } from '@core-controllers/screen/main';

import { PuzzleSequenceController } from '@core-controllers/puzzle-sequence/main';

import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';

import { PuzzleGridFactory } from '@core-factories/puzzle-grid/main';

import { ScreenState } from '@core-states/screen';
import { GameModeState } from '@core-states/game-mode';
import { createPuzzleState } from '@core-states/puzzle';

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
        PuzzleSequenceController,
        PrefersColorSchemeController,
    },
    coreFactories: {
        PuzzleGridFactory
    },
    coreState: {
        ScreenState,
        GameModeState,
        createPuzzleState
    },
    domActions: {
        DomPuzzleGrid,
        DomScreenSetupController,
        DomScreenManagement
    }
}));
