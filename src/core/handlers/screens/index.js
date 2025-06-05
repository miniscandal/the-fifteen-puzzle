import { composeStartScreen } from '@core-composes/screen-composes/compose-start-screen';
import { composePracticeScreen } from '@core-composes/screen-composes/compose-practice-screen';
import { composePlayScreen } from '@core-composes/screen-composes/compose-play-screen';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';
import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


const screenHandlers = {
    [SCREEN_ID_START]: composeStartScreen,
    [SCREEN_ID_PRACTICE]: composePracticeScreen,
    [SCREEN_ID_PLAY]: composePlayScreen,
};

export { screenHandlers };
