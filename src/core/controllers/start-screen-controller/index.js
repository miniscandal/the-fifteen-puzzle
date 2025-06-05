const StartScreenController = {
    resetInitialScreenState: ({ coreControllers, coreState }) => {
        const { ScreenNavigatorController } = coreControllers;

        coreState.ScreenState = { ...ScreenNavigatorController.resetHistory() };
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
            handlePuzzleSolved: ({ PuzzleState }) => { console.log(PuzzleState.isSolved); }
        };
    }
};

export { StartScreenController };
