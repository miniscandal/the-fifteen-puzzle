import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { PuzzleGame } from '@feature-play-screen/components/organisms/puzzle-game';

import './style.css';

function PlayScreen({ Game, screenId }) {
    const titleH2 = TitleH2({
        text: 'SOLVE PUZZLES!'
    });

    const puzzleGame = PuzzleGame({ Game });

    const children = (
        `
        <article class="play-screen">
            ${titleH2}
            ${puzzleGame}
            <div>Game Tips...</div>
        </article>
        `
    );

    return Screen({
        children,
        Game,
        screenId
    });
}

export { PlayScreen };
