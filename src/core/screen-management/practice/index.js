import { selectPuzzle } from '@core-game-management/select-puzzle';

import { selectPlayScreen } from '@feature-start-screen/components/molecules/navigation/logic/select-play-screen';
import { PracticeScreen } from '@feature-practice-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

import { PRACTICE } from '@core-screen-management/constants/screen-names';

function initializePracticeScreen({ Game, Screens }) {
    const settings = {
        html: PracticeScreen({ Game, PRACTICE }),
        logic: function () {
            primarySideBar({ Game, Screens, PRACTICE });
            selectPuzzle({ Game });
            selectPlayScreen({ Game, Screens });
        },
        symbol: PRACTICE
    };

    return settings;
}

export { initializePracticeScreen };
