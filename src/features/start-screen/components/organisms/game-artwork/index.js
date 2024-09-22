import { Picture } from '@shared-components/atoms/picture';
import { pictureAnimeCharacter } from '@shared-components/atoms/picture/variants';

import { GridFrameFourByFour } from '@feature-start-screen-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourArt } from '@feature-start-screen-components/molecules/grid-frame-four-by-four/variants';

import './style.css';

function GameArtwork() {
    const picture = Picture(pictureAnimeCharacter);
    const gridFrameFourByFour = GridFrameFourByFour(gridFrameFourByFourArt);

    return (
        `
        <section class="game-artwork">
            <div class="game-artwork__div">
                ${picture}
            </div>
            ${gridFrameFourByFour}
        </section>
        `
    );
}

export { GameArtwork };
