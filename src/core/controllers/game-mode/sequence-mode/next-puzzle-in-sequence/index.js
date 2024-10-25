function nextPuzzleInSequence({ puzzleId, STAGE_SEQUENCE }) {
    if (puzzleId === undefined) {
        return STAGE_SEQUENCE.at(0);
    }

    const sequenceIndex = STAGE_SEQUENCE.indexOf(puzzleId);

    return (sequenceIndex !== -1) ? STAGE_SEQUENCE[sequenceIndex + 1] : sequenceIndex;
}

export { nextPuzzleInSequence };
