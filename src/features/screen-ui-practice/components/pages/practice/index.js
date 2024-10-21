import { TitleH2 } from '@shared-components/atoms/title-h2';
import { ScreenMode } from '@shared-components/templates/screen-mode';

import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { PuzzleGridCollection } from '@feat-screen-ui-practice/components/organisms/puzzle-grid-collection';

import { SELECT_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';

import * as puzzles from '@shared-constants/puzzle-collection.js';

import './style.css';

function Practice({ screenSymbol }) {
    const titleH2 = TitleH2({ text: 'select practice puzzle' });
    const puzzleGridCollection = PuzzleGridCollection({ puzzles });
    const buttonSelectScreen = ButtonSelectScreen({
        text: 'play',
        id: SELECT_PLAY_SCREEN_ID,
        enabled: false
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

    return ScreenMode({
        children,
        screenSymbol
    });
}

export { Practice };
