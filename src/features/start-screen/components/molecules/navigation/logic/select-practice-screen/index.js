import { SELECT_PRACTICE_SCREEN_ID } from '../constants/element-identifiers';

function selectPracticeScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PRACTICE_SCREEN_ID);

    button.addEventListener('click', function () {
        Game.setupScreenRoutine(Screens.practice({ Game, Screens }));
    });
}

export { selectPracticeScreen };
