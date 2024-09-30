import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { puzzles } from '@core-game-management/permutations';

import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourPractice } from '@shared-components/molecules/grid-frame-four-by-four/variants';

import './style.css';


function practiceScreenLogic({ Game }) {
    document.getElementById('practice-screen__puzzles').addEventListener('click', (event) => {
        if (!event.target || !event.target.getAttribute('data-puzzle-id')) {
            return;
        }

        const element = event.target;
        Game.puzzle.id = element.getAttribute(['data-puzzle-id']);
    });
};

function PracticeScreen({ Game, screenId }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const gridFrameFourByFourElements = Object.values(puzzles).map(puzzle => {
        if (!puzzle.playEnabled) {
            return;
        }

        const gridFrameFourByFour = GridFrameFourByFour({
            ...gridFrameFourByFourPractice,
            gamePlaySettings: puzzle
        });

        return gridFrameFourByFour;
    });

    /*
    const gridFrameFourByFourElements = Object.keys(puzzles).map(key => {
        if (!puzzles[key].playEnabled) {
            return;
        }

        const gridFrameFourByFour = GridFrameFourByFour({
            ...gridFrameFourByFourPractice,
            gamePlaySettings: { ...puzzles[key], id: key },
        });

        return gridFrameFourByFour;
    });
    */

    const children = (
        `
        <article class="practice-screen">
            ${titleH2}
            <section id="practice-screen__puzzles" class="practice-screen__section">
                ${gridFrameFourByFourElements.join('')}
            </section>
            <div>Game Tips...</div>
        </article>
        `
    );

    return Screen({
        children,
        Game,
        screenId
    });
}
export { PracticeScreen, practiceScreenLogic };
