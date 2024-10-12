import * as permutations from '@core-game-management/permutations';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridPlay } from '@shared-components/organisms/puzzle-grid/variants';

import { generatePermutation } from '@shared-utils/generate-permutation';

import { TOTAL_TILES } from '@shared-constants/puzzle';

function PuzzleGame({ Game }) {
    const permutation = generatePermutation({ length: TOTAL_TILES });
    const puzzle = Object.values(permutations).find(puzzle => puzzle.id === Game.puzzle.id);

    Game.puzzle.id = puzzle?.id ?? permutations.permutationA1.id;
    Game.puzzle.permutation = puzzle?.permutation ?? permutations.permutationA1.permutation;
    Game.puzzle.state = permutation;

    const puzzleGrid = PuzzleGrid({
        ...puzzleGridPlay,
        puzzle: { id: Game.puzzle.id, permutation },
        logic: {}
    });

    return (
        `
        <section>
            ${puzzleGrid}
        </section>
        `
    );
}

export { PuzzleGame };
