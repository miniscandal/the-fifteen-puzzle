import { Screen } from '../shared/components/templates/screen';
import { TitleH1 } from '../shared/components/atoms/title-h1';
import { GameArtwork } from './components/organisms/game-artwork';
import { GameMainOptions } from './components/organisms/game-main-options';
import { GridFrameFourByFour } from './components/molecules/grid-frame-four-by-four';

import './style.css';

function StartScreen({ game }) {
    const titleH1 = TitleH1({
        text: 'The Fifteen Puzzle'
    });

    const gameArtwork = GameArtwork();
    const gameMainOptions = GameMainOptions();

    const gridFrame = GridFrameFourByFour({});

    const children = (
        `
        <article class="start-screen">
            ${titleH1}
            ${gameArtwork}
            ${gameMainOptions}

            ${gridFrame}
        </article>
        `
    );

    return Screen({
        children,
        game
    });
}


export { StartScreen };
