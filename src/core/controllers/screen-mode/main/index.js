import { startMode } from '@core-controllers/screen-mode/start-mode/main';
import { practiceMode } from '@core-controllers/screen-mode/practice-mode/main';
import { playMode } from '@core-controllers/screen-mode/play-mode/main';

import { GAME_SCREEN_PLAY, GAME_SCREEN_PRACTICE, GAME_SCREEN_START } from '@shared-constants/screen-modes';


function createScreenModeManager() {
    let previousMode = null;
    let currentMode = null;
    let modeHistory = [];

    const modesConfig = {
        [GAME_SCREEN_START]: { handlerMode: startMode },
        [GAME_SCREEN_PRACTICE]: { handlerMode: practiceMode },
        [GAME_SCREEN_PLAY]: { handlerMode: playMode },
    };

    const updateMode = (modeId) => {
        previousMode = currentMode;
        currentMode = modeId;
        modeHistory.push(modeId);
    };

    const transitionTo = ({ modeId, coreGameControllers }) => {
        const { handlerMode } = modesConfig[modeId];

        updateMode(modeId);

        return handlerMode(coreGameControllers);
    };

    const lastModeHistory = () => {
        modeHistory.pop();

        return modeHistory.pop();
    };

    const clearModeHistory = () => modeHistory = modeHistory.slice(-1);


    return {
        get previousMode() { return previousMode; },
        get currentMode() { return currentMode; },
        get modeHistory() { return modeHistory; },
        get lastModeHistory() { return lastModeHistory; },
        transitionTo,
        clearModeHistory
    };
};

const ScreenModeController = createScreenModeManager();

export { ScreenModeController };
