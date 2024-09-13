import { TitleH2 } from '../shared/components/atoms/title-h2';
import { GameScreen } from '../shared/components/templates/game-screen';

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

    return GameScreen({
        children,
        game
    });
}
export { PracticeScreen };
