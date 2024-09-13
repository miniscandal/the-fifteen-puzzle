import { StartScreen } from '../../../../feature-start-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';
import { mainMenuButtonsLogic } from '../../../../feature-start-screen/components/organisms/main-menu-buttons';

function startScreenSetup({ game, screens }) {

    return {
        html: StartScreen({ game }),
        logic: () => {
            gameScreenLogic({ game, screens });
            mainMenuButtonsLogic({ game, screens });
        },
        name: 'start'
    };
}

export { startScreenSetup };
