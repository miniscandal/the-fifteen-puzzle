import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';
import { domElementEmptyTile } from '@shared-dom-elements/data-attributes';
import { domElementPlayEnabledTiles } from '@shared-dom-elements/data-attributes';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';
import { CONFIG_PUZZLE_GRID_MAX_TILES } from '@shared-constants/config-puzzle-grid';

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
    handlePuzzleSolved
}) {
    const {
        PuzzleGridController: {
            handleTileClick,
            generateSolvedPuzzleState,
            swapTileIndices,
            getTilesMovableToEmpty,
            getGridPositionFromIndex,
            getMovableAdjacentTileIndices
        },
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = coreControllers;

    const {
        DomPuzzleGrid: {
            replaceElementContent,
            resetSelectableTiles,
            swapDataTiles,
            updateSelectableTiles,
            validateSelectableTile
        }
    } = domActions;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    const parser = new DOMParser();

    replaceElementContent({
        container: document.getElementById(PUZZLE_GAME_ID),
        htmlString: PuzzleGrid({
            size: 'medium',
            gameActive: true,
            puzzle
        }),
        parser
    });

    replaceElementContent({
        container: document.getElementById(PUZZLE_HELPER_GAME_ID),
        htmlString: PuzzleGrid({
            size: 'small',
            puzzle: {
                ...puzzle,
                solution: generateSolvedPuzzleState(CONFIG_PUZZLE_GRID_MAX_TILES)
            }
        }),
        parser
    });

    domElementPuzzleGrid().addEventListener('click', function (event) {
        const selectedTile = event.target;

        const isValid = validateSelectableTile({ tile: selectedTile, dataAttr: DATA_ATTR_SYMBOL_TILE });

        if (!isValid) {
            return;
        };

        const emptyTile = domElementEmptyTile();

        resetSelectableTiles({
            tiles: domElementPlayEnabledTiles(),
            dataAttrPlayEnabled: DATA_ATTR_PLAY_ENABLED,
            dataAttrMoveDirection: DATA_ATTR_MOVE_DIRECTION
        });

        swapDataTiles(selectedTile, emptyTile);

        const { movableTileIndices } = handleTileClick({
            selectedTile,
            emptyTileIndex: Number(emptyTile.dataset.index),
            puzzle,
            swapTileIndices: swapTileIndices,
            getTilesMovableToEmpty: getTilesMovableToEmpty,
            getGridPositionFromIndex: getGridPositionFromIndex,
            getMovableAdjacentTileIndices: getMovableAdjacentTileIndices
        });

        updateSelectableTiles({
            tiles: movableTileIndices,
            queryFn: (index) => document.querySelector(DATA_ATTR_INDEX_TILE(index))
        });

        handlePuzzleSolved();
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
            screenId: SCREEN_ID_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { uiPlayFunctionality };
