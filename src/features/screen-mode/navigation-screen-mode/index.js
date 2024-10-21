import { selectPlayScreen } from '../select-play-screen';
import { selectPracticeScreen } from '../select-practice-screen';

function navigationScreenMode({ ScreenModeController, ScreenController }) {
    selectPlayScreen({ ScreenModeController, ScreenController });
    selectPracticeScreen({ ScreenModeController, ScreenController });
}

export { navigationScreenMode };
