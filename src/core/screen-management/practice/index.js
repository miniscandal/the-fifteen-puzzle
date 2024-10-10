import { selectPuzzle } from '@core-game-management/select-puzzle';
import { selectPlayScreen } from '@feature-start-screen/components/molecules/navigation/logic/select-play-screen';
import { PracticeScreen } from '@feature-practice-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function practiceScreenSetup({ Game, Screens, screenSymbol }) {
    const setup = {
        html: PracticeScreen({ Game, screenSymbol }),
        logic: () => {
            primarySideBar({ Game, Screens, screenSymbol });
            selectPuzzle({ Game });
            selectPlayScreen({ Game, Screens });
        }
    };

    return setup;
}

export { practiceScreenSetup };
