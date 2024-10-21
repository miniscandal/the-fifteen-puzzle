import { AnimeCharacter } from '@feat-screen-ui-start/components/atoms/anime-character';
import { pictureAnimeCharacter } from '@feat-screen-ui-start/components/atoms/anime-character/variants';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridArt } from '@shared-components/organisms/puzzle-grid/variants';

import './style.css';

function Artwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const puzzleGrid = PuzzleGrid(puzzleGridArt);

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
