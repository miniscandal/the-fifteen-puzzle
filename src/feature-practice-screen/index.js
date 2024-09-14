import { TitleH2 } from '../shared/components/atoms/title-h2';
import { Screen } from '../shared/components/templates/screen';

function PracticeScreen({ game }) {
    const titleH2 = TitleH2({
        text: 'Select Practice Puzzle'
    });

    const children = (
        `
        <div>
            ${titleH2}
        </div>
        `
    );

    return Screen({
        children,
        game
    });
}
export { PracticeScreen };
