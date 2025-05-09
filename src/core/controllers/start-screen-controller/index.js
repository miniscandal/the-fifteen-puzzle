import { SCREEN_ID_START } from '@shared-constants/screen-modes';


const StartScreenController = {
    resetInitialScreenState: ({ coreControllers, coreState }) => {
        const { ScreenController } = coreControllers;
        const newScreenState = ScreenController.resetHistory(SCREEN_ID_START);

        coreState.ScreenState = { ...newScreenState };
    },
    resetGameState: ({ coreControllers, coreState }) => {
        const { GameModeSequentialPuzzlesController } = coreControllers;
        const { GameModeSequentialPuzzlesState } = coreState;
        const { sequence, activePuzzleIndex } = GameModeSequentialPuzzlesState;

        coreState.GameModeSequentialPuzzlesState = {
            ...GameModeSequentialPuzzlesController.reset({ GameModeSequentialPuzzlesState })
        };


        return {
            sequence,
            activePuzzleIndex
        };
    },
    setupGamePlay: ({ coreControllers, sequence, activePuzzleIndex }) => {
        const { GameModeSequentialPuzzlesController } = coreControllers;


        return {
            puzzleId: GameModeSequentialPuzzlesController.goToNextPuzzleIdSequence({
                sequence,
                activePuzzleIndex
            }),
            handlePuzzleSolved: () => { }
        };
    }
};

export { StartScreenController };
