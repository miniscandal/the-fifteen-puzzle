import { TrainScreen } from '../../../../feature-train-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';

function trainScreenLogic({ game }) {
    game.screen.render(TrainScreen());
    game.screen.logic(() => {
        gameScreenLogic();
    });
}

export { trainScreenLogic };
