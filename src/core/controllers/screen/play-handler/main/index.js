import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';

import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';


function playHandler({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    setupGamePlay
}) {
    const { puzzleId, onPuzzleSolved } = setupGamePlay();
    const { PuzzleGridController } = coreControllers;
    const { PuzzleGridFactory } = coreFactories;


    return {
        prepareHtmlStructure: () => Play(coreState),
        setupUiLogic: async () => {
            const puzzleSolution = PuzzleGridController.shuffleFromSolvedState(
                PuzzleGridController.generateSolvedPuzzleState(MAX_TILES)
            );

            const puzzleGrid = await PuzzleGridFactory({
                puzzleId,
                solution: puzzleSolution,
                loadPuzzleById: PuzzleGridController.loadPuzzleById
            });

            const movableTileIndices = PuzzleGridController.getTilesMovableToEmpty({
                solution: puzzleSolution,
                permutation: puzzleGrid.permutation,
                getGridPositionFromIndex: PuzzleGridController.getGridPositionFromIndex,
                getMovableAdjacentTileIndices: PuzzleGridController.getMovableAdjacentTileIndices,
            });

            puzzleGrid.movableTileIndices = movableTileIndices;


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                puzzle: puzzleGrid.properties(),
                onPuzzleSolved
            });
        }
    };
}

export { playHandler };
