import { AnimeCharacter } from '@feature-start-screen/components/atoms';
import { pictureAnimeCharacter } from '@feature-start-screen/components/atoms/variants';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';
import { puzzleGridArt } from '@shared-components/organisms/puzzle-grid/variants';

import { getAdjacentTileIndicesInGrid } from '@shared-components/organisms/puzzle-grid/logic/get-adjacent-tile-indices-in-grid';

import { generatePermutation } from '@shared-utils/generate-permutation';

import './style.css';

function Artwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const puzzleGrid = PuzzleGrid({
        ...puzzleGridArt,
        logic: { getAdjacentTileIndicesInGrid, generatePermutation }
    });

    return (
        `
        <section class="artwork">
            <div class="artwork__div">
                ${animeCharacter}
            </div>
            ${puzzleGrid}
        </section>
        `
    );
}

export { Artwork };
