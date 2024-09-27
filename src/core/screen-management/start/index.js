import { StartScreen } from '@feature-start-screen/main';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';
import { mainMenuButtonsLogic } from '@feature-start-screen/components/molecules/main-menu-buttons';

function startScreenSetup({ Game, Screens }) {

    return {
        html: StartScreen({ Game }),
        logic: () => {
            gameSettingsLogic({ Game, Screens });
            mainMenuButtonsLogic({ Game, Screens });
        },
        name: 'start'
    };
}

export { startScreenSetup };
