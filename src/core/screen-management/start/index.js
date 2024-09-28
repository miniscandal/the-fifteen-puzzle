import { StartScreen } from '@feature-start-screen/main';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';
import { mainMenuButtonsLogic } from '@feature-start-screen/components/molecules/main-menu-buttons';

function startScreenSetup({ Game, Screens, screenId }) {

    return {
        html: StartScreen({ Game, screenId }),
        logic: () => {
            gameSettingsLogic({ Game, Screens, screenId });
            mainMenuButtonsLogic({ Game, Screens });
        },
        name: screenId
    };
}

export { startScreenSetup };
