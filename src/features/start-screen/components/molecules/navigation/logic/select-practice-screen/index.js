import { screenSetup } from '@core-game-management/screen-setup';

import { SELECT_PRACTICE_SCREEN_ID } from '../constants/button-identifiers';

function selectPracticeScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PRACTICE_SCREEN_ID);

    button.addEventListener('click', function () {
        const setup = Screens.practice({ Game, Screens });

        screenSetup({
            Game,
            ...setup
        });
    });
}

export { selectPracticeScreen };
