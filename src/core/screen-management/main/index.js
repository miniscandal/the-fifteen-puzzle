import { startScreenSetup } from '@core-screen-management/start';

import { practiceScreenSetup } from '@core-screen-management/practice';


const Screens = {
    start: ({ ...core }) => startScreenSetup({ ...core, screenId: 'start' }),
    practice: ({ ...core }) => practiceScreenSetup({ ...core, screenId: 'practice' })
};

export { Screens };
