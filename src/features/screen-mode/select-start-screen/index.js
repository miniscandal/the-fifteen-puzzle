import { SELECT_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

function selectStartScreen({ GameController, ScreenController }) {
    const button = document.getElementById(SELECT_START_SCREEN_ID);

    button.addEventListener('click', function () {
        GameController.mode = undefined;
        GameController.puzzle.id = undefined;
        ScreenController.setupRoutine(ScreenController.states.start({ GameController, ScreenController }));
    });
}

export { selectStartScreen };
