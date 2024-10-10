import { startScreenSetup } from '@core-screen-management/start';
import { practiceScreenSetup } from '@core-screen-management/practice';
import { playScreenSetup } from '@core-screen-management/play';

import { START } from '@core-screen-management/constants/screen-names';
import { PRACTICE } from '@core-screen-management/constants/screen-names';
import { PLAY } from '@core-screen-management/constants/screen-names';

/**
 * This Screens object servers as a centralized management system for game
 * screens and setup functional logic.
 * 
 * It uses the core game objects and relevant settings as parameters.
 * 
 * The "coreObjects" parameter represents and refers to the global objects:
 * Game and Screens
 */

function setupScreen(coreObjects, screenSymbol, setupFunction) {
    const { Game, Screens } = coreObjects;
    const setup = setupFunction({
        Game,
        Screens,
        screenSymbol
    });

    return setup;
}

const Screens = {
    start: (coreObjects) => setupScreen(coreObjects, START, startScreenSetup),
    practice: (coreObjects) => setupScreen(coreObjects, PRACTICE, practiceScreenSetup),
    play: (coreObjects) => setupScreen(coreObjects, PLAY, playScreenSetup),
};

export { Screens };
