import { PLAY } from '@core-screen-management/constants/screen-names';

import { Play } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-components/molecules/puzzle-tile/logic/selectable-tiles';

import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function initializePlayScreen({ Game, Screens }) {
    const screenSymbol = PLAY;
    const settings = {
        html: Play({ Game, screenSymbol }),
        logic: function () {
            primarySideBar({ Game, Screens, screenSymbol });
            selectPuzzleTile({ Game });
        },
        screenSymbol
    };

    return settings;
}

export { initializePlayScreen };
