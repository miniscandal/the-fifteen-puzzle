import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';
import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';
import { domElementEmptyTile, domElementPlayEnabledTiles } from '@shared-dom-elements/data-attributes';


import { DATA_ATTR_INDEX_TILE, DATA_ATTR_MOVE_DIRECTION, DATA_ATTR_PLAY_ENABLED, DATA_ATTR_SYMBOL_TILE } from '@shared-constants/dom-element-data-attributes';


function uiPlayFunctionality({
    coreControllers,
    coreFactories,
    DomPuzzleGrid,
    puzzleData
}) {
    const {
        PuzzleGridController,
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = coreControllers;

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

    DomPuzzleGrid.domReplaceElementContent(PUZZLE_GAME_ID, mainPuzzleHTML);
    DomPuzzleGrid.domReplaceElementContent(PUZZLE_HELPER_GAME_ID, solvedPuzzleHTML);

    domElementPuzzleGrid().addEventListener('click', function (event) {
        const selectedTile = event.target;

        const isValid = DomPuzzleGrid.validateSelectableTile({
            element: selectedTile,
            dataAttrSymbolTile: DATA_ATTR_SYMBOL_TILE
        });

        if (!isValid) return;

        const emptyTile = domElementEmptyTile();

        DomPuzzleGrid.resetSelectableTiles({
            tiles: domElementPlayEnabledTiles(),
            dataAttrPlayEnabled: DATA_ATTR_PLAY_ENABLED,
            dataAttrMoveDirection: DATA_ATTR_MOVE_DIRECTION
        });

        DomPuzzleGrid.swapTilesData(selectedTile, emptyTile);

        const emptyTileIndex = Number(emptyTile.dataset.index);

        const newState = PuzzleGridController.updateState({ state: puzzle.state, selectedIndex: selectedTile.dataset.index, zeroIndex: emptyTileIndex });

        puzzle.state = newState;

        const movableTileIndices = PuzzleGridController.getMovableTileIndices(newState, puzzle.permutation);

        DomPuzzleGrid.updateSelectableTiles({ tiles: movableTileIndices, dataAttrIndexTile: DATA_ATTR_INDEX_TILE });


        const { isSolved } = puzzleData;

        if (isSolved) {
            console.log(isSolved);
        }
    });

    domElementButtonSelectBackScreen()?.addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: ScreenController.getLastVisitedScreen(),
            coreControllers,
            coreFactories
        }));
    });

    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_START,
            coreControllers,
            coreFactories
        }));
    });
}

export { uiPlayFunctionality };
