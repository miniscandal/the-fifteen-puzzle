import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import * as permutations from '@core-game-management/permutations';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';
import { puzzleGridPractice } from '@shared-components/organisms/puzzle-grid/variants';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function PracticeScreen({ Game, screenSymbol }) {
    const titleH2 = TitleH2({ text: 'select practice puzzle' });

    const puzzleGrids = Object.values(permutations).map(puzzle => {
        if (!puzzle.playEnabled) {
            return;
        }

        const puzzleGrid = PuzzleGrid({
            ...puzzleGridPractice,
            puzzle,
            logic: {}
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
        appearance: Game.appearance,
        screenSymbol
    });
}

export { PracticeScreen };
