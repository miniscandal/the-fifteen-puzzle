import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

function PracticeScreen({ Game }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const children = (
        `
        <article>
            ${titleH2}
        </article>
        `
    );

    return Screen({
        children,
        Game
    });
}
export { PracticeScreen };
