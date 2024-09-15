import { PracticeScreen } from '../../../../feature-practice-screen';
import { gameSettingsLogic } from '../../../components/organisms/game-settings';

function practiceScreenSetup({ game, screens }) {

    return {
        html: PracticeScreen({ game }),
        logic: () => {
            gameSettingsLogic({ game, screens });
        },
        name: 'practice'
    };
}

export { practiceScreenSetup };
