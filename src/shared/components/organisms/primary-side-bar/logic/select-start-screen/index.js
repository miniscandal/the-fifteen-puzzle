import { SELECT_START_SCREEN_ID } from '../constants/element-identifiers';

function selectStartScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_START_SCREEN_ID);

    button.addEventListener('click', function () {
        Game.mode = undefined;
        Game.puzzle.id = undefined;
        Game.setupScreenRoutine(Screens.start({ Game, Screens }));
    });
}

export { selectStartScreen };
