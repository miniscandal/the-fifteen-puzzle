import { STAGE_SEQUENCE } from '@feat-play-screen-ui/constants/stage-sequence';

function nextPuzzleInSequence(puzzleId) {
    if (puzzleId === undefined) {
        return STAGE_SEQUENCE.at(0);
    }

    const sequenceIndex = STAGE_SEQUENCE.indexOf(puzzleId);

    return (sequenceIndex !== -1) ? STAGE_SEQUENCE[sequenceIndex + 1] : sequenceIndex;
}

export { nextPuzzleInSequence };
