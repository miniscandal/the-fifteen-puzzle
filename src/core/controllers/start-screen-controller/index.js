import { SCREEN_ID_START } from '@shared-constants/screen-modes';


const StartScreenController = {
    resetInitialScreenState: ({ coreControllers, coreState }) => {
        const { ScreenNavigatorController: { resetHistory } } = coreControllers;

        coreState.ScreenState = { ...resetHistory(SCREEN_ID_START) };
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
