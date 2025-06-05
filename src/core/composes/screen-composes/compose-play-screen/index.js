import { Play } from '@feat-atomic-design-play-screen/components/pages/play';

import { setupPlayScreenUiFeature } from '@feat-setup-screen-ui-features/setup-play-screen-ui';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


function composePlayScreen({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    domElementAccessors,
    setupGamePlay
}) {
    const { puzzleId, handlePuzzleSolved } = setupGamePlay();
    const { PuzzleGridFactory } = coreFactories;
    const { PuzzleGridStateController, PuzzleGridShuffling, PuzzleGridTiles, ScreenNavigatorController } = coreControllers;
    const { ScreenState } = coreState;
    const newScreenState = ScreenNavigatorController.pushScreenState({
        state: ScreenState,
        history: ScreenState.history,
        screenId: SCREEN_ID_PLAY
    });

    coreState.ScreenState = newScreenState;


    return {
        prepareHtmlStructure: () => Play(coreState),
        setupUiLogic: async () => {
            const { createPuzzleState } = coreState;
            const PuzzleState = await PuzzleGridStateController.initializePuzzleGridState({
                PuzzleGridStateController,
                PuzzleGridShuffling,
                PuzzleGridTiles,
                PuzzleGridFactory,
                createPuzzleState,
                puzzleId
            });

            setupPlayScreenUiFeature({
                coreControllers,
                coreFactories,
                coreState: { ...coreState, PuzzleState },
                domActions,
                domElementAccessors,
                handlePuzzleSolved
            });
        }
    };
}

export { composePlayScreen };
