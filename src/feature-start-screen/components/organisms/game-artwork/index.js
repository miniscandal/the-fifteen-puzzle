import { Picture } from '@shared-components/atoms/picture';
import { pictureAnimeCharacter } from '@shared-components/atoms/picture/variants';

import { GridFrameFourByFour } from '../../molecules/grid-frame-four-by-four';
import { gridFrameFourByFourArt } from '../../molecules/grid-frame-four-by-four/variants';

import './style.css';

function GameArtwork() {
    const picture = Picture(pictureAnimeCharacter);
    const gridFrameFourByFour = GridFrameFourByFour(gridFrameFourByFourArt);

    return (
        `
        <section class="game-artwork">
            ${picture}
            ${gridFrameFourByFour}
        </section>
        `
    );
}

export { GameArtwork };
