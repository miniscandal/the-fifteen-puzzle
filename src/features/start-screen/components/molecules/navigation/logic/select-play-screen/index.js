import { PRACTICE_GAME_MODE, SEQUENCE_GAME_MODE } from '@core-constants/game-modes';
import { SELECT_PLAY_SCREEN_ID } from '../constants/element-identifiers';

function selectPlayScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PLAY_SCREEN_ID);

    button.addEventListener('click', function () {
        if (Game.mode === undefined) {
            Game.puzzle.id = undefined;
            Game.mode = SEQUENCE_GAME_MODE;
        }

        if (Game.mode === PRACTICE_GAME_MODE && Game.puzzle.id === undefined) {
            return;
        }

        Game.setupScreenRoutine(Screens.play({ Game, Screens }));
    });
}

export { selectPlayScreen };
