import { PLAY } from '@core-screen-management/constants/screen-names';

import { loadPuzzle } from '@core-stage-management/load-puzzle';

import { Play } from '@feature-play-screen/components/pages';

import { renderPuzzleScene } from '@feature-play-screen/components/organisms/puzzle-game/logic/render-puzzle-scene';

import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { puzzleGrid } from '@shared-components/organisms/puzzle-grid/logic/main';

function initializePlayScreen({ Game, Screens }) {
    const screenSymbol = PLAY;
    const settings = {
        html: Play({ screenSymbol }),
        logic: function () {
            primarySideBar({ Game, Screens, screenSymbol });
            loadPuzzle({ Game, renderPuzzleScene, puzzleGrid });
        },
        screenSymbol
    };

    return settings;
}

export { initializePlayScreen };
