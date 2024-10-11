import { selectPracticeScreen } from '../select-practice-screen';
import { selectPlayScreen } from '../select-play-screen';

function navigation({ Game, Screens }) {
    selectPlayScreen({ Game, Screens });
    selectPracticeScreen({ Game, Screens });
}

export { navigation };
