import { DomPuzzleGrid } from '@core-controllers/dom-puzzle-grid/main';

import { Play } from '@feat-screen-ui-play/components/pages';

import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';

import { uiPlayFunctionality } from '../functionality';


function playHandler({ coreControllers, coreFactories, GamePlaySetup }) {
    const { puzzleId } = GamePlaySetup();
    const { PuzzleGridController } = coreControllers;
    const { PuzzleGridFactory } = coreFactories;


    return {
        htmlFunctionality: () => Play(coreControllers),
        uiFunctionality: async () => {
            const puzzleData = await PuzzleGridFactory({ PuzzleGridController, puzzleId, loadPuzzle });;


            return uiPlayFunctionality({ coreControllers, coreFactories, DomPuzzleGrid, puzzleData });
        }
    };
}

export { playHandler };
