import { startScreenSetup } from '@core-screen-management/start';
import { practiceScreenSetup } from '@core-screen-management/practice';
import { playScreenSetup } from '@core-screen-management/play';

import { START } from '@core-screen-management/constants/screen-names';
import { PRACTICE } from '@core-screen-management/constants/screen-names';
import { PLAY } from '@core-screen-management/constants/screen-names';

const Screens = {
    start: ({ ...core }) => startScreenSetup({ ...core, screenSymbol: START }),
    practice: ({ ...core }) => practiceScreenSetup({ ...core, screenSymbol: PRACTICE }),
    play: ({ ...core }) => playScreenSetup({ ...core, screenSymbol: PLAY })
};

export { Screens };
