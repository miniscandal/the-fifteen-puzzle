import { PRACTICE_GAME_MODE } from '@shared-constants/game-modes';
import { SELECT_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

function selectPracticeScreen({ GameController, ScreenController }) {
    const button = document.getElementById(SELECT_PRACTICE_SCREEN_ID);

    button.addEventListener('click', function () {
        GameController.mode = PRACTICE_GAME_MODE;
        ScreenController.setupRoutine(ScreenController.states.practice({ GameController, ScreenController }));
    });
}

export { selectPracticeScreen };
