import { selectPuzzleGrid } from '@feature-practice-screen/components/organisms/puzzle-grid-collection/logic/select-puzzle-grid';

import { selectPlayScreen } from '@feature-start-screen/components/molecules/navigation/logic/select-play-screen';
import { Practice } from '@feature-practice-screen/components/pages/practice';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

import { PRACTICE } from '@core-screen-management/constants/screen-names';

function initializePracticeScreen({ Game, Screens }) {
    const screenSymbol = PRACTICE;
    const settings = {
        html: Practice({ screenSymbol }),
        logic: function () {
            primarySideBar({ Game, Screens, screenSymbol });
            selectPuzzleGrid({ Game });
            selectPlayScreen({ Game, Screens });
        },
        screenSymbol
    };

    return settings;
}

export { initializePracticeScreen };
