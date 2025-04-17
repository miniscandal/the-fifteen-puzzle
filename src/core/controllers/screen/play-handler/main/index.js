import { DomPuzzleGrid } from '@core-controllers/dom-puzzle-grid/main';

import { Play } from '@feat-screen-ui-play/components/pages';

import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';

import { uiPlayFunctionality } from '../functionality';


function playHandler({ GameCoreControllers, GameCoreFactories, GamePlaySetup }) {
    const { puzzleId } = GamePlaySetup();
    const { PuzzleGridController } = GameCoreControllers;
    const { PuzzleGridFactory } = GameCoreFactories;


    return {
        htmlFunctionality: () => Play(GameCoreControllers),
        uiFunctionality: async () => {
            const puzzleData = await PuzzleGridFactory({ PuzzleGridController, puzzleId, loadPuzzle });;


            return uiPlayFunctionality({ GameCoreControllers, GameCoreFactories, DomPuzzleGrid, puzzleData });
        }
    };
}

export { playHandler };
