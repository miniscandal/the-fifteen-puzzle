import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { loadPuzzle } from '@feat-screen-ui-play/controllers/stage/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/event-listener-select-screen-mode';

import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { puzzleGrid } from '@shared-components/organisms/puzzle-grid/logic/main';

import { START_SCREEN } from '@shared-constants/screen-modes';


function playModeFunctionality(coreObjects) {
    prefersColorScheme(coreObjects.PrefersColorSchemeController);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN
    });

    loadPuzzle({ PuzzleGridController, renderPuzzleScene, puzzleGrid });
}

export { playModeFunctionality };
