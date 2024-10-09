import { startScreenSetup } from '@core-screen-management/start';
import { practiceScreenSetup } from '@core-screen-management/practice';
import { playScreenSetup } from '@core-screen-management/play';

import { START } from '@core-screen-management/constants/screen-names';
import { PRACTICE } from '@core-screen-management/constants/screen-names';
import { PLAY } from '@core-screen-management/constants/screen-names';

/**
 * This Screens object servers as a centralized management system for game screens
 * and setup functional logic.
 * 
 * It uses the core game objects and relevant settings as parameters.
 * 
 * The "...core" parameter represents and contains as arguments the global objects:
 * Game and Screens
 */

const Screens = {
    start: ({ ...core }) => startScreenSetup({ ...core, screenSymbol: START }),
    practice: ({ ...core }) => practiceScreenSetup({ ...core, screenSymbol: PRACTICE }),
    play: ({ ...core }) => playScreenSetup({ ...core, screenSymbol: PLAY })
};

export { Screens };
