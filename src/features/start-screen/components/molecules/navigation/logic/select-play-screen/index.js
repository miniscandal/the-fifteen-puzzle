import { screenSetup } from '@core-game-management/screen-setup';

import { SELECT_PLAY_SCREEN_ID } from '../constants/button-identifiers';

function selectPlayScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PLAY_SCREEN_ID);

    button.addEventListener('click', function () {
        const setup = Screens.play({ Game, Screens });

        screenSetup({
            Game,
            ...setup
        });
    });
}

export { selectPlayScreen };
