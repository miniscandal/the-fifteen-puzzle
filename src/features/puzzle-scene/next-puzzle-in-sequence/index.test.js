import { expect, test } from 'vitest';

import { nextPuzzleInSequence } from '.';

import { STAGE_SEQUENCE } from '@feat-play-screen-ui/constants/stage-sequence';

test('the id puzzle is the first of the sequence', () => {
    const puzzleId = undefined;

    expect(nextPuzzleInSequence(puzzleId)).toBe(STAGE_SEQUENCE.at(0));
});

test('the id puzzle is not present in the sequence por la tanto el id equals -1', () => {
    const puzzleId = 'unknown id';

    expect(nextPuzzleInSequence(puzzleId)).toBe(-1);
});

test('the next id for the sequence is equal to next puzzle id', () => {
    const puzzleId = STAGE_SEQUENCE.at(-2);

    expect(nextPuzzleInSequence(puzzleId)).toBe(STAGE_SEQUENCE.at(-1));
});
