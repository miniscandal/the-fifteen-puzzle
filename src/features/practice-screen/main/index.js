import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { puzzles } from '@core-game-management/permutations';

import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourPractice } from '@shared-components/molecules/grid-frame-four-by-four/variants';

import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';

import { generate16TilePermutation } from '@shared-utils/generate-permutation';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function PracticeScreen({ Game, screenSymbol }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const gridFrameFourByFourElements = Object.values(puzzles).map(puzzle => {
        if (!puzzle.playEnabled) {
            return;
        }

        const gridFrameFourByFour = GridFrameFourByFour({
            ...gridFrameFourByFourPractice,
            puzzle,
            logic: { getMovableTileIndices, generate16TilePermutation }
        });

        return gridFrameFourByFour;
    });

    const buttonSelectScreen = ButtonSelectScreen({ text: 'play', id: 'select-play-screen' });

    const children = (
        `
        <article class="practice-screen">
            ${titleH2}
            <section id="practice-screen__puzzles" class="practice-screen__section">
                ${gridFrameFourByFourElements.join('')}
            </section>
            <section>
                ${buttonSelectScreen}
            </section>
            <div>Game Tips...</div>
        </article>
        `
    );

    return Screen({
        children,
        Game,
        screenSymbol
    });
}

export { PracticeScreen };
