import { startScreenSetup } from '@core-screen-management/start';
import { practiceScreenSetup } from '@core-screen-management/practice';
import { playScreenSetup } from '@core-screen-management/play';


const Screens = {
    start: ({ ...core }) => startScreenSetup({ ...core, screenId: 'start' }),
    practice: ({ ...core }) => practiceScreenSetup({ ...core, screenId: 'practice' }),
    play: ({ ...core }) => playScreenSetup({ ...core, screenId: 'play' })
};

export { Screens };
