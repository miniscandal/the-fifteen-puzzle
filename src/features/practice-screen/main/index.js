import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourPractice } from '@shared-components/molecules/grid-frame-four-by-four/variants';

import './style.css';

function PracticeScreen({ Game, screenId }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const elements = GridFrameFourByFour(gridFrameFourByFourPractice);

    const children = (
        `
        <article class="practice-screen">
            ${titleH2}
            <section class="practice-screen__section">
                ${elements}
                ${elements}
                ${elements}
                ${elements}
                ${elements}
                ${elements}
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
export { PracticeScreen };
