import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { PuzzleGame } from '@feature-play-screen/components/organisms/puzzle-game';

import './style.css';

function Play({ screenSymbol }) {
    const titleH2 = TitleH2({ text: 'solve puzzles!' });
    const puzzleGame = PuzzleGame();

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
        screenSymbol
    });
}

export { Play };
