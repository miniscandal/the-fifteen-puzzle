import { AnimeCharacter } from '@feature-start-screen-components/atoms';
import { pictureAnimeCharacter } from '@feature-start-screen-components/atoms/variants';

import { GridFrameFourByFour } from '@feature-start-screen-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourArt } from '@feature-start-screen-components/molecules/grid-frame-four-by-four/variants';

import './style.css';

function GameArtwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const gridFrameFourByFour = GridFrameFourByFour(gridFrameFourByFourArt);

    return (
        `
        <section class="game-artwork">
            <div class="game-artwork__div">
                ${animeCharacter}
            </div>
            ${gridFrameFourByFour}
        </section>
        `
    );
}

export { GameArtwork };
