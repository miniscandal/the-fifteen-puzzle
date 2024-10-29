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
        [START_SCREEN]: () => ScreenModeController.updateMode(START_SCREEN, startMode),
        [PRACTICE_SCREEN]: () => ScreenModeController.updateMode(PRACTICE_SCREEN, practiceMode),
        [PLAY_SCREEN]: () => ScreenModeController.updateMode(PLAY_SCREEN, playMode),
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
