import { SELECT_PLAY_SCREEN_ID } from '../constants/element-identifiers';

function selectPlayScreen({ Game, Screens }) {
    const button = document.getElementById(SELECT_PLAY_SCREEN_ID);

    button.addEventListener('click', function () {
        Game.setupScreenRoutine(Screens.play({ Game, Screens }));
    });
}

export { selectPlayScreen };
