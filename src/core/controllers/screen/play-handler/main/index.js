import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


function playHandler({ coreControllers, coreFactories, coreState, domActions, setupGamePlay }) {
    const { puzzleId, handlePuzzleSolved } = setupGamePlay();
    const { PuzzleGridFactory } = coreFactories;
    const { PuzzleGridState, PuzzleGridShuffling, PuzzleGridTiles, ScreenController } = coreControllers;
    const { ScreenState } = coreState;
    const newScreenState = ScreenController.updateScreenState({
        state: ScreenState,
        history: ScreenState.history,
        screenId: SCREEN_ID_PLAY
    });

    coreState.ScreenState = newScreenState;


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
