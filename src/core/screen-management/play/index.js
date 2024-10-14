import { PLAY } from '@core-screen-management/constants/screen-names';
import { loadPuzzle } from '@feature-play-screen/components/organisms/puzzle-game/logic/load-puzzle';
import { puzzleGridGamePlay } from '@shared-components/organisms/puzzle-grid/variants';

import { Play } from '@feature-play-screen/components/pages';

// import { selectPuzzleTile } from '@shared-components/molecules/puzzle-tile/logic/selectable-tiles';

import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function initializePlayScreen({ Game, Screens }) {
    const screenSymbol = PLAY;
    const settings = {
        html: Play({ screenSymbol }),
        logic: function () {
            primarySideBar({ Game, Screens, screenSymbol });
            loadPuzzle({ Game, puzzleGridGamePlay });

            // selectPuzzleTile({ Game });
        },
        screenSymbol
    };

    return settings;
}

export { initializePlayScreen };
