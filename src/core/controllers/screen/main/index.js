import { startHandler } from '@core-controllers/screen/start-handler/main';
import { practiceHandler } from '@core-controllers/screen/practice-handler/main';
import { playHandler } from '@core-controllers/screen/play-handler/main';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';
import { GAME_SCREEN_START } from '@shared-constants/screen-modes';


const ScreenController = {
    previousScreenId: null,
    currentScreenId: null,
    screenHistory: [],

    screenHandlers: {
        [GAME_SCREEN_START]: startHandler,
        [GAME_SCREEN_PRACTICE]: practiceHandler,
        [GAME_SCREEN_PLAY]: playHandler,
    },

    updateDataScreen(screenId) {
        this.previousScreenId = this.currentScreenId;
        this.currentScreenId = screenId;
        this.screenHistory.push(screenId);
    },

    transitionToGamePlay({ screenId, coreControllers, coreFactories, gamePlaySetup, domActions }) {
        this.updateDataScreen(screenId);

        return this.screenHandlers[screenId]({
            coreControllers,
            coreFactories,
            gamePlaySetup,
            domActions
        });
    },

    transitionTo({ screenId, coreControllers, coreFactories, domActions }) {
        this.updateDataScreen(screenId);


        return this.screenHandlers[screenId]({
            coreControllers,
            coreFactories,
            domActions
        });
    },

    getLastVisitedScreen() {
        this.screenHistory.pop();

        return this.screenHistory.pop();
    },

    clearScreenHistory() {
        this.screenHistory = this.screenHistory.slice(-1);
    },
};

export { ScreenController };
