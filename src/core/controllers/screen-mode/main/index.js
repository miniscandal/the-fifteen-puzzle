import { startMode } from '@core-controllers/screen-mode/start-mode/main';
import { practiceMode } from '@core-controllers/screen-mode/practice-mode/main';
import { playMode } from '@core-controllers/screen-mode/play-mode/main';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';
import { START_SCREEN } from '@shared-constants/screen-modes';

/**
 * coreObjects in start key is ScreenModeController, ScreenSetupController and PrefersColorSchemeController
 */

const ScreenModeController = {
    modes: {
        [START_SCREEN]: (coreObjects) => startMode(coreObjects),
        [PRACTICE_SCREEN]: (coreObjects) => practiceMode(coreObjects),
        [PLAY_SCREEN]: (coreObjects) => playMode(coreObjects),
    },
    currentMode: undefined,
};

export { ScreenModeController };
