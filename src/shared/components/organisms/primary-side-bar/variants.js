import { ScreenModeController } from '@core-controllers/screen-mode/main';
import { SELECT_GAME_SCREEN_START_ID } from '@shared-constants/dom-element-identifiers';


const primarySideBar = {
    get buttonSelectStartScreen() {
        if (ScreenModeController.modeHistory.length <= 2) {
            return undefined;
        }

        return {
            text: 'main menu',
            id: SELECT_GAME_SCREEN_START_ID
        };
    }
};

export { primarySideBar };
