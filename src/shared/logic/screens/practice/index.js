import { PracticeScreen } from '../../../../feature-practice-screen';
import { gameScreenLogic } from '../../../components/templates/game-screen';

function practiceScreenSetup({ game, screens }) {
    return {
        html: PracticeScreen({ game }),
        logic: () => {
            gameScreenLogic({ game, screens });
        },
        name: 'practice'
    };
}

export { practiceScreenSetup };
