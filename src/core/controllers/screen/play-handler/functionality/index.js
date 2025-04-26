import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';
import { domElementEmptyTile } from '@shared-dom-elements/data-attributes';
import { domElementPlayEnabledTiles } from '@shared-dom-elements/data-attributes';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';
import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';

import { DATA_ATTR_INDEX_TILE } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_MOVE_DIRECTION } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_PLAY_ENABLED } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_SYMBOL_TILE } from '@shared-constants/dom-element-data-attributes';


function uiPlayFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    puzzle,
    onPuzzleSolved
}) {
    const {
        PuzzleGridController,
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = coreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    const {
        DomPuzzleGrid: {
            domReplaceElementContent,
            resetSelectableTiles,
            swapTilesData,
            updateSelectableTiles,
            validateSelectableTile
        }
    } = domActions;

    domReplaceElementContent(PUZZLE_GAME_ID, PuzzleGrid({
        size: 'medium',
        gameActive: true,
        puzzle
    }));

    domReplaceElementContent(PUZZLE_HELPER_GAME_ID, PuzzleGrid({
        size: 'small',
        puzzle: {
            ...puzzle,
            solution: PuzzleGridController.generateSolvedPuzzleState(MAX_TILES)
        }
    }));

    domElementPuzzleGrid().addEventListener('click', function (event) {
        const selectedTile = event.target;

        const isValid = validateSelectableTile({
            element: selectedTile,
            dataAttrSymbolTile: DATA_ATTR_SYMBOL_TILE
        });

        if (!isValid) {
            return;
        };

        const emptyTile = domElementEmptyTile();

        resetSelectableTiles({
            tiles: domElementPlayEnabledTiles(),
            dataAttrPlayEnabled: DATA_ATTR_PLAY_ENABLED,
            dataAttrMoveDirection: DATA_ATTR_MOVE_DIRECTION
        });

        swapTilesData(selectedTile, emptyTile);

        const { movableTileIndices } = PuzzleGridController.handleTileClick({
            selectedTile,
            emptyTileIndex: Number(emptyTile.dataset.index),
            puzzle,
            swapTileIndices: PuzzleGridController.swapTileIndices,
            getTilesMovableToEmpty: PuzzleGridController.getTilesMovableToEmpty,
            getGridPositionFromIndex: PuzzleGridController.getGridPositionFromIndex,
            getMovableAdjacentTileIndices: PuzzleGridController.getMovableAdjacentTileIndices
        });

        updateSelectableTiles({
            tiles: movableTileIndices,
            dataAttrIndexTile: DATA_ATTR_INDEX_TILE
        });
    });

    domElementButtonSelectBackScreen()?.addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: ScreenController.getLastVisitedScreen(),
            coreControllers,
            coreFactories,
            domActions
        }));
    });

    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.goToScreen({
            screenId: GAME_SCREEN_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { uiPlayFunctionality };
