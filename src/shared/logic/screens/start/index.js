import { StartScreen } from '../../../../feature-start-screen';
import { gameSettingsLogic } from '../../../components/organisms/game-settings';
import { mainMenuButtonsLogic } from '../../../../feature-start-screen/components/molecules/main-menu-buttons';

function startScreenSetup({ game, screens }) {

    return {
        html: StartScreen({ game }),
        logic: () => {
            gameSettingsLogic({ game, screens });
            mainMenuButtonsLogic({ game, screens });
        },
        name: 'start'
    };
}

export { startScreenSetup };