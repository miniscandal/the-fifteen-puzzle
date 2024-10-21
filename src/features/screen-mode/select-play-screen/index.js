import { PRACTICE_GAME_MODE, } from '@shared-constants/game-modes';
import { SEQUENCE_GAME_MODE } from '@shared-constants/game-modes';
import { SELECT_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

function selectPlayScreen({ GameController, ScreenController }) {
    const button = document.getElementById(SELECT_PLAY_SCREEN_ID);

    button.addEventListener('click', function () {
        if (GameController.mode === undefined) {
            GameController.puzzle.id = undefined;
            GameController.mode = SEQUENCE_GAME_MODE;
        }

        if (GameController.mode === PRACTICE_GAME_MODE && GameController.puzzle.id === undefined) {
            return;
        }

        ScreenController.setupRoutine(ScreenController.states.play({ GameController, ScreenController }));
    });
}

export { selectPlayScreen };
