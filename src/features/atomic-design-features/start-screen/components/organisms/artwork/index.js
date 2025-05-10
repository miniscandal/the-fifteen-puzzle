import { AnimeCharacter } from '@feat-atomic-design-start-screen/components/atoms/anime-character';
import { pictureAnimeCharacter } from '@feat-atomic-design-start-screen/components/atoms/anime-character/variants';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import './style.css';


function Artwork() {
    const animeCharacter = AnimeCharacter(pictureAnimeCharacter);
    const puzzleGrid = PuzzleGrid({});

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
