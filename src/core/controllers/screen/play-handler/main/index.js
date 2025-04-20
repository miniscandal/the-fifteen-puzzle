import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';


function playHandler({ coreControllers, coreFactories, gamePlaySetup, domActions }) {
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

            const puzzle = PuzzleGrid.properties();


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                domActions,
                puzzle
            });
        }
    };
}

export { playHandler };
