import { StartScreen } from '../../../../feature-start-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';
import { mainMenuButtonsLogic } from '../../../../feature-start-screen/components/organisms/main-menu-buttons';

function startSceneLogic({ game, gameScreens }) {
    game.screen.render(StartScreen({ game }));
    game.screen.logic(() => {
        gameScreenLogic({ game, gameScreens });
        mainMenuButtonsLogic({ game, gameScreens });
    });
    game.screen.current = 'start';
}

export { startSceneLogic };
