import { PLAY } from '@core-screen-management/constants/screen-names';

import { PlayScreen } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-components/molecules/puzzle-tile/logic/selectable-tiles';

import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function initializePlayScreen({ Game, Screens }) {
    const settings = {
        html: PlayScreen({ Game, PLAY }),
        logic: function () {
            primarySideBar({ Game, Screens, PLAY });
            selectPuzzleTile({ Game });
        },
        symbol: PLAY
    };

    return settings;
}

export { initializePlayScreen };
