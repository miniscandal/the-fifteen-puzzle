import { AnimeCharacter } from '@feature-start-screen/components/atoms';
import { pictureAnimeCharacter } from '@feature-start-screen/components/atoms/variants';

import { GridFrameFourByFour } from '@shared-components/organisms/grid-frame-four-by-four';
import { gridFrameFourByFourArt } from '@shared-components/organisms/grid-frame-four-by-four/variants';

import { getAdjacentTileIndicesInGrid } from '@shared-components/molecules/puzzle-tile/logic/get-adjacent-tile-indices-in-grid';

import { generate16TilePermutation } from '@shared-utils/generate-permutation';

import './style.css';

function Artwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const gridFrameFourByFour = GridFrameFourByFour({
        ...gridFrameFourByFourArt,
        logic: { getAdjacentTileIndicesInGrid, generate16TilePermutation }
    });

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
