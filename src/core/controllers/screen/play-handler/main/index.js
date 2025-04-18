import { DomPuzzleGrid } from '@core-controllers/dom-puzzle-grid/main';

import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';


function playHandler({ coreControllers, coreFactories, gamePlaySetup }) {
    const { puzzleId } = gamePlaySetup();
    const { PuzzleGridController } = coreControllers;
    const { PuzzleGridFactory } = coreFactories;


    return {
        htmlFunctionality: () => Play(coreControllers),
        uiFunctionality: async () => {
            const PuzzleGrid = await PuzzleGridController.preparePuzzleGrid({
                PuzzleGridFactory,
                puzzleId
            });

            return uiPlayFunctionality({ coreControllers, coreFactories, DomPuzzleGrid, puzzleGrid: PuzzleGrid });
        }
    };
}

export { playHandler };
