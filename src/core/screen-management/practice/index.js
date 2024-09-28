import { PracticeScreen } from '@feature-practice-screen/main';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';

function practiceScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PracticeScreen({ Game, screenId }),
        logic: () => {
            gameSettingsLogic({ Game, Screens, screenId });
        },
        name: screenId
    };
}

export { practiceScreenSetup };
