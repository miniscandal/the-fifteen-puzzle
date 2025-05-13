import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';
import { domElementPuzzleGrid } from '@shared-dom-elements/structural';
import { domElementEmptyTile } from '@shared-dom-elements/data-attributes';
import { domElementPlayEnabledTiles } from '@shared-dom-elements/data-attributes';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';

import { DATA_ATTR_INDEX_TILE } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_MOVE_DIRECTION } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_PLAY_ENABLED } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_SYMBOL_TILE } from '@shared-constants/dom-element-data-attributes';


function setupPlayScreenUiFeature({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    handlePuzzleSolved
}) {
    const { PuzzleGridTiles, ScreenNavigatorController } = coreControllers;
    const { PuzzleState, ScreenState } = coreState;
    const {
        ScreenSetupDomController,
        PuzzleGridDomController: {
            replaceElementContent,
            resetSelectableTiles,
            swapDataTiles,
            updateSelectableTiles,
            validateSelectableTile
        }
    } = domActions;
    const parser = new DOMParser();
    const puzzle = PuzzleState.properties();

    replaceElementContent({
        container: document.getElementById(PUZZLE_GAME_ID),
        htmlString: PuzzleGrid({
            size: 'medium',
            gameActive: true,
            puzzle: {
                ...puzzle,
                solution: puzzle.playerSolution
            }
        }),
        parser
    });

    replaceElementContent({
        container: document.getElementById(PUZZLE_HELPER_GAME_ID),
        htmlString: PuzzleGrid({
            size: 'small',
            puzzle: {
                ...puzzle,
                solution: puzzle.targetSolution
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

        swapDataTiles({ selectedTile, emptyTile });

        resetSelectableTiles({
            tiles: domElementPlayEnabledTiles(),
            dataAttrPlayEnabled: DATA_ATTR_PLAY_ENABLED,
            dataAttrMoveDirection: DATA_ATTR_MOVE_DIRECTION
        });

        const { playerSolution, movableTileIndices } = PuzzleGridTiles.handleTileClick({
            PuzzleState,
            PuzzleGridTiles,
            selectedTile,
            emptyTile
        });

        PuzzleState.playerSolution = playerSolution;
        PuzzleState.movableTileIndices = movableTileIndices;

        updateSelectableTiles({
            tiles: movableTileIndices,
            queryFn: (index) => document.querySelector(DATA_ATTR_INDEX_TILE(index))
        });

        console.log(PuzzleState);

        handlePuzzleSolved();
    });

    domElementButtonSelectBackScreen()?.addEventListener('click', () => {
        coreState.ScreenState = {
            ...ScreenNavigatorController.backScreenState({
                state: ScreenState
            })
        };

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: ScreenState.previousId,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });

    domElementButtonSelectStartScreen().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { setupPlayScreenUiFeature };
