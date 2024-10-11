import { SELECT_START_SCREEN_ID } from '../constants/identifiers';

function selectStartScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_START_SCREEN_ID);

    button.addEventListener('click', function () {
        Game.setupScreenRoutine(Screens.start({ Game, Screens }));
    });
}

export { selectStartScreen };
