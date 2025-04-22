import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';

import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';


function playHandler({ coreControllers, coreFactories, gamePlaySetup, domActions }) {
    const { puzzleId, onPuzzleTileClick } = gamePlaySetup();
    const { PuzzleGridController } = coreControllers;
    const { PuzzleGridFactory } = coreFactories;


    return {
        htmlFunctionality: () => Play(coreControllers),
        uiFunctionality: async () => {
            const solution = PuzzleGridController.generateShufflePuzzleState(
                PuzzleGridController.generateSolvedPuzzleState(MAX_TILES)
            );

            const puzzleGrid = await PuzzleGridFactory({
                puzzleId,
                solution,
                loadPuzzle: PuzzleGridController.loadPuzzle
            });

            puzzleGrid.movableTileIndices = PuzzleGridController.getMovableTileIndices({
                solution,
                permutation: puzzleGrid.permutation
            });

            const puzzle = puzzleGrid.properties();


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                domActions,
                puzzle,
                onPuzzleTileClick
            });
        }
    };
}

export { playHandler };
