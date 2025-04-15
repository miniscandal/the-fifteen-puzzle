import { STAGE_SEQUENCE } from '@shared-constants/stage-sequence';


const PuzzleSequenceController = {
    puzzleSequence: STAGE_SEQUENCE,
    activePuzzleId: null,

    goToNextPuzzleIdSequence() {
        if (this.activePuzzleId === null) {
            this.activePuzzleId = this.puzzleSequence.at(0);

            return this.activePuzzleId;
        }

        const sequenceIndex = this.puzzleSequence.indexOf(this.activePuzzleId);

        this.activePuzzleId = (sequenceIndex !== -1) ? this.puzzleSequence[sequenceIndex + 1] : sequenceIndex;


        return this.activePuzzleId;
    },

    reset() {
        this.activePuzzleId = null;
    },
};

export { PuzzleSequenceController };
