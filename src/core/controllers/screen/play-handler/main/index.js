import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';

import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';


function playHandler({ coreControllers, coreFactories, gamePlaySetup, domActions }) {
    const { puzzleId, onPuzzleSolved } = gamePlaySetup();
    const { PuzzleGridController } = coreControllers;
    const { PuzzleGridFactory } = coreFactories;


    return {
        htmlFunctionality: () => Play(coreControllers),
        uiFunctionality: async () => {
            const solution = PuzzleGridController.shuffleFromSolvedState(
                PuzzleGridController.generateSolvedPuzzleState(MAX_TILES)
            );

            const puzzleGrid = await PuzzleGridFactory({
                puzzleId,
                solution,
                loadPuzzleById: PuzzleGridController.loadPuzzleById
            });

            puzzleGrid.movableTileIndices = PuzzleGridController.getValidMoveTileIndices({
                solution,
                permutation: puzzleGrid.permutation
            });

            const puzzle = puzzleGrid.properties();


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                domActions,
                puzzle,
                onPuzzleSolved
            });
        }
    };
}

export { playHandler };
