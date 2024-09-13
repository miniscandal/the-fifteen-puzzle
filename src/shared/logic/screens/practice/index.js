import { PracticeScreen } from '../../../../feature-practice-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';

function PracticeScreenLogic({ game }) {
    game.screen.render(PracticeScreen());
    game.screen.logic(() => {
        gameScreenLogic();
    });
}

export { PracticeScreenLogic };
