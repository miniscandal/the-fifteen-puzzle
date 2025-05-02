import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';


function playHandler({ coreControllers, coreFactories, coreState, domActions, setupGamePlay }) {
    const { puzzleId, handlePuzzleSolved } = setupGamePlay();
    const { PuzzleGridFactory } = coreFactories;
    const { PuzzleGridState, PuzzleGridShuffling, PuzzleGridTiles } = coreControllers;


    return {
        prepareHtmlStructure: () => Play(coreState),
        setupUiLogic: async () => {
            const { createPuzzleState } = coreState;

            const PuzzleState = await PuzzleGridState.initializePuzzleGridState({
                PuzzleGridState,
                PuzzleGridShuffling,
                PuzzleGridTiles,
                PuzzleGridFactory,
                createPuzzleState,
                puzzleId
            });


            return uiPlayFunctionality({
                coreControllers,
                coreFactories,
                coreState: { ...coreState, PuzzleState },
                domActions,
                handlePuzzleSolved
            });
        }
    };
}

export { playHandler };
