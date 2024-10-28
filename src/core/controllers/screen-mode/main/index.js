import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';
import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { startMode } from '@core-controllers/screen-mode/start-mode/main';
import { practiceMode } from '@core-controllers/screen-mode/practice-mode/main';
import { playMode } from '@core-controllers/screen-mode/play-mode/main';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';
import { START_SCREEN } from '@shared-constants/screen-modes';


const ScreenModeController = {
    modes: {
        [START_SCREEN]: () => startMode(coreObjects),
        [PRACTICE_SCREEN]: () => practiceMode(coreObjects),
        [PLAY_SCREEN]: () => playMode(coreObjects),
    },
    currentMode: undefined,
};

const coreObjects = {
    ScreenSetupController,
    PrefersColorSchemeController,
    GameModeController,
    ScreenModeController,
    PuzzleGridController
};


export { ScreenModeController };
