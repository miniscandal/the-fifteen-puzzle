import { PLAY_SCREEN } from '@shared-constants/screen-names';

import { loadPuzzle } from '@feat-screen-ui-play/controllers/stage/load-puzzle';

import { Play } from '@feat-screen-ui-play/components/pages';

import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';

import { puzzleGrid } from '@shared-components/organisms/puzzle-grid/logic/main';

function playMode({ GameController, ScreenController }) {
    const screenSymbol = PLAY_SCREEN;
    const settings = {
        html: Play({ screenSymbol }),
        interactionLogic: function () {
            primarySideBar({ GameController, ScreenController, screenSymbol });
            loadPuzzle({ GameController, renderPuzzleScene, puzzleGrid });
        },
        screenSymbol
    };

    return settings;
}

export { playMode };
