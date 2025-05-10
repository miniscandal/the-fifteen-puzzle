import { TitleH2 } from '@shared-components/atoms/title-h2';
import { ScreenMode } from '@shared-components/templates/screen-mode';

import { PuzzleGame } from '@feat-atomic-design-play-screen/components/organisms/puzzle-game';

import './style.css';


function Play(coreState) {
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

    return ScreenMode({
        children,
        coreState
    });
}

export { Play };
