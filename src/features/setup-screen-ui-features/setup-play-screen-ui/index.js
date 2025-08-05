import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { SCREEN_ID_PLAY, SCREEN_ID_START } from '@shared-constants/screen-modes';
import { PUZZLE_GAME_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_HELPER_GAME_ID, } from '@shared-constants/dom-element-identifiers';

import { DATA_ATTR_MOVE_DIRECTION } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_PLAY_ENABLED } from '@shared-constants/dom-element-data-attributes';
import { DATA_ATTR_SYMBOL_TILE } from '@shared-constants/dom-element-data-attributes';


function setupPlayScreenUiFeature({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    domElementAccessors,
    handlePuzzleSolved
}) {
    const { PuzzleGridTilesController, ScreenNavigatorController, PuzzleGridStateController: { isSolved } } = coreControllers;
    const { PuzzleState, ScreenState } = coreState;
    const {
        ScreenSetupDomController,
        PuzzleGridDomController: {
            replaceElementContent,
            resetSelectableTiles,
            swapDataTiles,
            updateSelectableTiles,
            validateSelectableTile
        },
        ScreenManagementDomController: { toggleThemeListener }
    } = domActions;
    const {
        DataAttributeDomElementsAccessor: { getPlayEnabledTiles, getEmptyTile, getTileByIndex },
        ButtonsDomElementAccessors: { getBackScreenButton, getStartScreenButton, getThemeToggleButton },
        PuzzleDomElementAccessors: { getPuzzleGrid }
    } = domElementAccessors;
    const parser = new DOMParser();
    const puzzle = PuzzleState.properties();

    getThemeToggleButton().addEventListener('click', () => toggleThemeListener({ coreState }));

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

    getPuzzleGrid().addEventListener('click', function (event) {
        const selectedTile = event.target;

        const isValid = validateSelectableTile({ tile: selectedTile, dataAttr: DATA_ATTR_SYMBOL_TILE });

        if (!isValid) {
            return;
        };

        const emptyTile = getEmptyTile();

        swapDataTiles({ selectedTile, emptyTile });

        resetSelectableTiles({
            tiles: getPlayEnabledTiles(),
            dataAttrPlayEnabled: DATA_ATTR_PLAY_ENABLED,
            dataAttrMoveDirection: DATA_ATTR_MOVE_DIRECTION
        });

        const { playerSolution, movableTileIndices } = PuzzleGridTilesController.handleTileClick({
            PuzzleState,
            PuzzleGridTilesController,
            selectedTile,
            emptyTile
        });

        PuzzleState.playerSolution = playerSolution;
        PuzzleState.movableTileIndices = movableTileIndices;

        updateSelectableTiles({
            tiles: movableTileIndices,
            queryFn: (index) => getTileByIndex(index)
        });

        PuzzleState.isSolved = isSolved(PuzzleState.targetSolution, PuzzleState.playerSolution);

        if (!PuzzleState.isSolved) {

            return;
        };

        handlePuzzleSolved({ PuzzleState });

        // 

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            domElementAccessors,
            // setupGamePlay: () => setupGamePlay({ coreControllers, sequence, activePuzzleIndex })
            setupGamePlay: () => {
                return {
                    puzzleId: 'puzzleA3',
                    handlePuzzleSolved: () => { console.log('solved'); }
                };
            }
        }));
    });

    getBackScreenButton()?.addEventListener('click', () => {
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
            domActions,
            domElementAccessors
        }));
    });

    getStartScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_START,
            coreControllers,
            coreFactories,
            coreState,
            domElementAccessors,
            domActions
        }));
    });
}

export { setupPlayScreenUiFeature };
