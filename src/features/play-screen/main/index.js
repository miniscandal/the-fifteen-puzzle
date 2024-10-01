import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

function PlayScreen({ Game, screenId }) {
    const titleH2 = TitleH2({
        text: 'Solve Puzzle'
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
        Game,
        screenId
    });
}

export { PlayScreen };
