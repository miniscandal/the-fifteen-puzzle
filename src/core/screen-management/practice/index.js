import { selectPuzzle } from '@core-game-management/select-puzzle';
import { selectPlayScreen } from '@feature-start-screen/components/molecules/navigation/logic/select-play-screen';
import { PracticeScreen } from '@feature-practice-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function practiceScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PracticeScreen({ Game, screenId }),
        logic: () => {
            primarySideBar({ Game, Screens, screenId });
            selectPuzzle({ Game });
            selectPlayScreen({ Game, Screens });
        },
        name: screenId
    };
}

export { practiceScreenSetup };
