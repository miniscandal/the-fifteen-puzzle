import { STAGE_SEQUENCE } from '@shared-constants/stage-sequence';


function sequenceMode(coreObjects) {
    const { PuzzleGridController } = coreObjects;
    const idPuzzle = PuzzleGridController.puzzle.id ?? STAGE_SEQUENCE[0];

    return idPuzzle;
}

export { sequenceMode };
