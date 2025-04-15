import { domReplaceElementContent } from '@feat-puzzle-scene/render-puzzle-scene';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';

import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';
import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';


function uiPlayFunctionality(GameCoreControllers, puzzleData) {
    const {
        PuzzleGridController,
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = GameCoreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    const { properties } = puzzleData;
    const puzzle = properties();

    const mainPuzzleHTML = PuzzleGrid({
        size: 'medium',
        gameActive: true,
        puzzle,
    });

    const solvedPuzzleHTML = PuzzleGrid({
        size: 'small',
        puzzle: {
            ...puzzle,
            state: PuzzleGridController.generateSolvedPuzzleState(MAX_TILES)
        }
    });

    domReplaceElementContent(PUZZLE_GAME_ID, mainPuzzleHTML);
    domReplaceElementContent(PUZZLE_HELPER_GAME_ID, solvedPuzzleHTML);

    domElementPuzzleGrid().addEventListener('click', function (event) {
        const { index, selectedTileIndex } = selectPuzzleTile(event);

        puzzleData.updateState(index, selectedTileIndex);

        const { isSolved } = puzzleData;

        if (isSolved) {
            console.log(isSolved);
        }
    });

    domElementButtonSelectBackScreen()?.addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: ScreenController.getLastVisitedScreen(),
            GameCoreControllers
        }));
    });

    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_START,
            GameCoreControllers
        }));
    });
}

export { uiPlayFunctionality };
