import { startMode } from '@core-controllers/screen-mode/start-mode/main';
import { practiceMode } from '@core-controllers/screen-mode/practice-mode';
import { playMode } from '@core-controllers/screen-mode/play-mode';


/**
 * coreObjects in start key is ScreenModeController and PrefersColorSchemeController
 */

const ScreenModeController = {
    modes: {
        start: (coreObjects) => startMode(coreObjects),
        practice: (coreObjects) => practiceMode(coreObjects),
        play: (coreObjects) => playMode(coreObjects),
    },
    currentMode: undefined,
};

export { ScreenModeController };
