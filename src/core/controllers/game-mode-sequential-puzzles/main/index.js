const GameModeSequentialPuzzlesController = {
    goToNextPuzzleIdSequence({ sequence = [], activePuzzleIndex }) {
        if (activePuzzleIndex === -1 || activePuzzleIndex >= sequence.length - 1) {

            return sequence[0];
        }


        return sequence[activePuzzleIndex];
    },
    reset({ GameModeSequentialPuzzlesState }) {

        return {
            sequence: GameModeSequentialPuzzlesState.sequence,
            activePuzzleIndex: -1
        };
    },
};

export { GameModeSequentialPuzzlesController };
