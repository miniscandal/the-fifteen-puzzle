import { PracticeScreen } from '../../../../feature-practice-screen';
import { gameScreenLogic } from '../../../components/templates/screen';

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
