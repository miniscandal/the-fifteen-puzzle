import { expect, test } from 'vitest';

function anime() {
    return true;
}


test('anime', () => {
    expect(anime()).toBe(true);
});
