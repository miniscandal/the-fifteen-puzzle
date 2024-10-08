import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { puzzles } from '@core-game-management/permutations';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';
import { puzzleGridPractice } from '@shared-components/organisms/puzzle-grid/variants';

import { getAdjacentTileIndicesInGrid } from '@shared-components/organisms/puzzle-grid/logic/get-adjacent-tile-indices-in-grid';

import { generatePermutation } from '@shared-utils/generate-permutation';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function PracticeScreen({ Game, screenSymbol }) {
    const titleH2 = TitleH2({ text: 'select practice puzzle' });

    const puzzleGrids = Object.values(puzzles).map(puzzle => {
        if (!puzzle.playEnabled) {
            return;
        }

        const puzzleGrid = PuzzleGrid({
            ...puzzleGridPractice,
            puzzle,
            logic: { getAdjacentTileIndicesInGrid, generatePermutation }
        });

        return puzzleGrid;
    });

    const buttonSelectScreen = ButtonSelectScreen({ text: 'play', id: 'select-play-screen' });

    const children = (
        `
        <article class="practice-screen">
            ${titleH2}
            <section id="practice-screen__puzzles" class="practice-screen__section">
                ${puzzleGrids.join('')}
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
