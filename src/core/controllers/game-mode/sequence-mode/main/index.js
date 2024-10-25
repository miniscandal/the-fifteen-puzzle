import { nextPuzzleInSequence } from '@core-controllers/game-mode/sequence-mode/next-puzzle-in-sequence';
import { STAGE_SEQUENCE } from '@shared-constants/stage-sequence';


function sequenceMode(coreObjects) {
    const puzzleId = nextPuzzleInSequence({
        puzzleId: coreObjects.PuzzleGridController.puzzle.id,
        STAGE_SEQUENCE
    });

    return puzzleId;
}

export { sequenceMode };
