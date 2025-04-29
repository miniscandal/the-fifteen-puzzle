import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';

import { CONFIG_PUZZLE_GRID_MAX_TILES } from '@shared-constants/config-puzzle-grid';


function playHandler({
    coreControllers, coreFactories, coreState, domActions, setupGamePlay
}) {
    const { puzzleId, handlePuzzleSolved } = setupGamePlay();
    const { PuzzleGridFactory } = coreFactories;
    const { PuzzleGridController: {
        shuffleFromSolvedState,
        generateSolvedPuzzleState,
        loadPuzzleById,
        getTilesMovableToEmpty,
        getGridPositionFromIndex,
        getMovableAdjacentTileIndices
    } } = coreControllers;


    return {
        prepareHtmlStructure: () => Play(coreState),
        setupUiLogic: async () => {
            const puzzleSolution = shuffleFromSolvedState(
                generateSolvedPuzzleState(CONFIG_PUZZLE_GRID_MAX_TILES)
            );

            const puzzleGrid = await PuzzleGridFactory({
                puzzleId,
                solution: puzzleSolution,
                loadPuzzleById: loadPuzzleById
            });

            const movableTileIndices = getTilesMovableToEmpty({
                solution: puzzleSolution,
                permutation: puzzleGrid.permutation,
                getGridPositionFromIndex: getGridPositionFromIndex,
                getMovableAdjacentTileIndices: getMovableAdjacentTileIndices,
            });

            puzzleGrid.movableTileIndices = movableTileIndices;


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                puzzle: puzzleGrid.properties(),
                handlePuzzleSolved
            });
        }
    };
}

export { playHandler };
