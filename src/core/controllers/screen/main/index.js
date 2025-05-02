import { startHandler } from '@core-controllers/screen/start-handler/main';
import { practiceHandler } from '@core-controllers/screen/practice-handler/main';
import { playHandler } from '@core-controllers/screen/play-handler/main';

import { goToScreen } from '@feat-screen/go-to-screen';
import { goToGamePlayScreen } from '@feat-screen/go-to-game-play-screen';
import { updateScreenState } from '@feat-screen/update-screen-state';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';
import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


/**
 * 
 * goToScreen
 * 
 * coreObjects - Object containing the required dependencies
 * 
 * coreObjects.screenId - ID of the target screen
 * coreObjects.coreControllers - Main application controllers
 * coreObjects.coreFactories - Factory methods for creating instances
 * coreObjects.coreState - Global application state
 * coreObjects.domActions - Functions to manipulate the DOM
 * 
 */

/**
 * 
 * goToGamePlayScreen
 * 
 * coreObjects - Object containing the required dependencies
 * 
 * coreObjects.screenId - ID of the gameplay screen
 * coreObjects.coreControllers - Main application controllers
 * coreObjects.coreFactories - Factory methods for creating instances
 * coreObjects.setupGamePlay - Function to set up gameplay logic
 * coreObjects.coreState - Global application state
 * coreObjects.domActions - Functions to manipulate the DOM
 * 
 */


const ScreenController = {
    screenHandlers: {
        [SCREEN_ID_START]: startHandler,
        [SCREEN_ID_PRACTICE]: practiceHandler,
        [SCREEN_ID_PLAY]: playHandler,
    },
    goToScreen(coreObjects) {
        return goToScreen({ ...coreObjects, screenHandlers: this.screenHandlers });
    },
    goToGamePlayScreen(coreObjects) {
        return goToGamePlayScreen({ ...coreObjects, screenHandlers: this.screenHandlers });
    },
    updateScreenState,
    getPreviousScreen: (history) => (history.pop(), history.pop()),
    resetHistory: (history) => history.slice(-1),
};

export { ScreenController };
