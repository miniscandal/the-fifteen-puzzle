import { selectPuzzle } from '@core-game-management/select-puzzle';
import { selectPlayScreen } from '@core-game-management/select-screen';
import { PracticeScreen } from '@feature-practice-screen/main';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';

function practiceScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PracticeScreen({ Game, screenId }),
        logic: () => {
            gameSettingsLogic({ Game, Screens, screenId });
            selectPuzzle({ Game });
            selectPlayScreen({ Game, Screens });
        },
        name: screenId
    };
}

export { practiceScreenSetup };
