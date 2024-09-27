import { Screen } from '@shared-components/templates/screen';
import { TitleH1 } from '@shared-components/atoms/title-h1';

import { GameArtwork } from '@feature-start-screen/components/organisms/game-artwork';
import { GameMainOptions } from '@feature-start-screen/components/organisms/game-main-options';

import './style.css';

function StartScreen({ Game }) {
    const titleH1 = TitleH1({
        text: 'THE FIFTEEN PUZZLE'
    });
    const gameArtwork = GameArtwork();
    const gameMainOptions = GameMainOptions();

    const children = (
        `
        <article class="start-screen">
            ${titleH1}
            ${gameArtwork}
            ${gameMainOptions}
        </article>
        `
    );

    return Screen({
        children,
        Game
    });
}


export { StartScreen };
