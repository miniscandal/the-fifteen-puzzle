import { STAGE_SEQUENCE } from '@feat-screen-ui-play/constants/stage-sequence';


function sequenceMode(coreObjects) {
    console.log('sequence mode');

    const { PuzzleGridController } = coreObjects;

    const idPuzzle = PuzzleGridController.puzzle.id ?? STAGE_SEQUENCE[0];


    return idPuzzle;
}

export { sequenceMode };
