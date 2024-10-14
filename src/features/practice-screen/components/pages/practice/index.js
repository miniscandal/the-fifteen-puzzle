import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Screen } from '@shared-components/templates/screen';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { PuzzleGridCollection } from '@feature-practice-screen/components/organisms/puzzle-grid-collection';

import * as puzzles from '@core-constants/puzzles.js';

import './style.css';

function Practice({ screenSymbol }) {
    const titleH2 = TitleH2({ text: 'select practice puzzle' });
    const puzzleGridCollection = PuzzleGridCollection({ puzzles });
    const buttonSelectScreen = ButtonSelectScreen({
        text: 'play',
        id: 'select-play-screen'
    });

    const children = (
        `
        <article class="practice-page">
            ${titleH2}
            ${puzzleGridCollection}
            ${buttonSelectScreen}
            <div>Game Tips...</div>
        </article>
        `
    );

    return Screen({
        children,
        screenSymbol
    });
}

export { Practice };
