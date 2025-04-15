import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';


function playHandler(GameCoreControllers, GameCoreFactories, GamePlaySetup) {
    const { puzzleId } = GamePlaySetup();
    const { PuzzleGridController } = GameCoreControllers;
    const { PuzzleGridFactory } = GameCoreFactories;

    return {
        htmlFunctionality: () => Play(GameCoreControllers),
        uiFunctionality: async () => {
            const puzzleData = await PuzzleGridFactory({ PuzzleGridController, puzzleId });;


            return uiPlayFunctionality(GameCoreControllers, puzzleData);
        }
    };
}

export { playHandler };
