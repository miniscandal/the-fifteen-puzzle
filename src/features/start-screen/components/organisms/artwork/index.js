import { AnimeCharacter } from '@feature-start-screen/components/atoms';
import { pictureAnimeCharacter } from '@feature-start-screen/components/atoms/variants';

import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourArt } from '@shared-components/molecules/grid-frame-four-by-four/variants';

import './style.css';

function Artwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const gridFrameFourByFour = GridFrameFourByFour(gridFrameFourByFourArt);

    return (
        `
        <section class="artwork">
            <div class="artwork__div">
                ${animeCharacter}
            </div>
            ${gridFrameFourByFour}
        </section>
        `
    );
}

export { Artwork };
