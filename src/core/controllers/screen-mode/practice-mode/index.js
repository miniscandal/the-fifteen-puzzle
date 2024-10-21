import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { selectPuzzleGrid } from '@feat-puzzle-scene/select-puzzle-grid';
import { selectPlayScreen } from '@feat-screen-mode/select-play-screen';

import { primarySideBar } from '@feat-screen-mode/primary-side-bar';

import { PRACTICE_SCREEN } from '@shared-constants/screen-names';

function practiceMode({ GameController, ScreenController }) {
    const screenSymbol = PRACTICE_SCREEN;
    const settings = {
        html: Practice({ screenSymbol }),
        interactionLogic: function () {
            primarySideBar({ GameController, ScreenController, screenSymbol });
            selectPuzzleGrid({ GameController });
            selectPlayScreen({ GameController, ScreenController });
        },
        screenSymbol
    };

    return settings;
}

export { practiceMode };
