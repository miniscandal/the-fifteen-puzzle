import { Play } from '@feat-atomic-design-play-screen/components/pages';

import { setupPlayScreenUiFeature } from '@feat-setup-screen-ui-features/setup-play-screen-ui-feature';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';


function composePlayScreen({ coreControllers, coreFactories, coreState, domActions, setupGamePlay }) {
    const { puzzleId, handlePuzzleSolved } = setupGamePlay();
    const { PuzzleGridFactory } = coreFactories;
    const { PuzzleGridState, PuzzleGridShuffling, PuzzleGridTiles, ScreenNavigatorController } = coreControllers;
    const { ScreenState } = coreState;
    const newScreenState = ScreenNavigatorController.updateScreenState({
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


            return setupPlayScreenUiFeature({
                coreControllers,
                coreFactories,
                coreState: { ...coreState, PuzzleState },
                domActions,
                handlePuzzleSolved
            });
        }
    };
}

export { composePlayScreen };
