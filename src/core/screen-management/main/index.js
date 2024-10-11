import { initializeStartScreen } from '@core-screen-management/start';
import { initializePracticeScreen } from '@core-screen-management/practice';
import { initializePlayScreen } from '@core-screen-management/play';

/**
 * This Screens object servers as a centralized management system for game
 * screens and setup functional logic.
 * 
 * It uses the core game objects and relevant settings as parameters.
 * 
 * The "coreObjects" parameter represents and refers to the global objects:
 * Game and Screens
 */


const Screens = {
    start: (coreObjects) => initializeStartScreen(coreObjects),
    practice: (coreObjects) => initializePracticeScreen(coreObjects),
    play: (coreObjects) => initializePlayScreen(coreObjects),
};

export { Screens };
