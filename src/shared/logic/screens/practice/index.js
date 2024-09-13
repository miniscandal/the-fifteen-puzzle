import { PracticeScreen } from '../../../../feature-practice-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';

function PracticeScreenLogic({ game, gameScreens }) {
    game.screen.render(PracticeScreen({ game }));
    game.screen.logic(() => {
        gameScreenLogic({ game, gameScreens });
    });
    game.screen.current = 'practice';
}

export { PracticeScreenLogic };
