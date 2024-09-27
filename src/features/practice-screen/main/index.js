import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import './style.css';

function PracticeScreen({ Game }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const children = (
        `
        <article class="practice-screen">
            ${titleH2}
            <div>game play</div>
            <div>messages</div>
        </article>
        `
    );

    return Screen({
        children,
        Game
    });
}
export { PracticeScreen };
