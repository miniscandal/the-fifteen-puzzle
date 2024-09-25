import { PracticeScreen } from '@feature-practice-screen';

import { gameSettingsLogic } from '@shared-components/organisms/game-settings';

function practiceScreenSetup({ Game, Screens }) {

    return {
        html: PracticeScreen({ Game }),
        logic: () => {
            gameSettingsLogic({ Game, Screens });
        },
        name: 'practice'
    };
}

export { practiceScreenSetup };
