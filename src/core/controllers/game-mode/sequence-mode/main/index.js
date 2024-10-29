import { nextPuzzleInSequence } from '@core-controllers/game-mode/sequence-mode/next-puzzle-in-sequence';

import { STAGE_SEQUENCE } from '@shared-constants/stage-sequence';


function sequenceMode({ PuzzleGridController }) {
    return nextPuzzleInSequence({
        puzzleId: PuzzleGridController.puzzle.id,
        STAGE_SEQUENCE
    });
}

export { sequenceMode };
