import { PRACTICE_GAME_MODE } from '@core-constants/game-modes';

import { SELECT_PRACTICE_SCREEN_ID } from '../constants/element-identifiers';

function selectPracticeScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PRACTICE_SCREEN_ID);

    button.addEventListener('click', function () {
        Game.mode = PRACTICE_GAME_MODE;
        Game.setupScreenRoutine(Screens.practice({ Game, Screens }));
    });
}

export { selectPracticeScreen };
