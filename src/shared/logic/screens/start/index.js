import { StartScreen } from '../../../../feature-start-screen';
import { gameScreenLogic } from '../../../components/templates/screen';
import { mainMenuButtonsLogic } from '../../../../feature-start-screen/components/molecules/main-menu-buttons';

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
