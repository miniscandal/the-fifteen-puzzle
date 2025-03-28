import { ScreenSetupController } from '@core-controllers/screen-setup/main';
import { PrefersColorSchemeController } from '@core-controllers/prefers-color-scheme/main';
import { GameModeController } from '@core-controllers/game-mode/main';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { startMode } from '@core-controllers/screen-mode/start-mode/main';
import { practiceMode } from '@core-controllers/screen-mode/practice-mode/main';
import { playMode } from '@core-controllers/screen-mode/play-mode/main';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';
import { GAME_SCREEN_START } from '@shared-constants/screen-modes';


const ScreenModeController = {
    modes: {
        [GAME_SCREEN_START]: () => ScreenModeController.updateMode(GAME_SCREEN_START, startMode),
        [GAME_SCREEN_PRACTICE]: () => ScreenModeController.updateMode(GAME_SCREEN_PRACTICE, practiceMode),
        [GAME_SCREEN_PLAY]: () => ScreenModeController.updateMode(GAME_SCREEN_PLAY, playMode),
    },
    previousMode: undefined,
    currentMode: undefined,
    modeHistory: [],
    updateMode(newMode, modeFunction) {
        this.previousMode = this.currentMode;
        this.currentMode = newMode;
        this.modeHistory.push(newMode);

        return modeFunction(coreObjects);
    },
    lastModeHistory() {
        /**
         * Delete the current mode screen in history
         */
        this.modeHistory.pop();

        return this.modeHistory.pop();
    },
    clearModeHistory() {
        this.modeHistory = this.modeHistory.slice(-1);
    }
};

const coreObjects = {
    ScreenSetupController,
    PrefersColorSchemeController,
    GameModeController,
    ScreenModeController,
    PuzzleGridController
};


export { ScreenModeController };
