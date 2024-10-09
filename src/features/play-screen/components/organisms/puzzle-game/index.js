import { puzzles } from '@core-game-management/permutations';

import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';

import { gridFrameFourByFourPlay } from '@shared-components/molecules/grid-frame-four-by-four/variants';

import { getMovableTileIndices } from '@shared-helpers/get-movable-tile-indices';

import { generate16TilePermutation } from '@shared-utils/generate-permutation';

import { TOTAL_TILES } from '@shared-constants/puzzle';

function PuzzleGame({ Game }) {
    const permutation = generate16TilePermutation({ length: TOTAL_TILES });
    const puzzle = Object.values(puzzles).find(puzzle => puzzle.id === Game.puzzle.id);

    Game.puzzle.id = puzzle?.id ?? puzzles.permutationA1.id;
    Game.puzzle.permutation = puzzle?.permutation ?? puzzles.permutationA1.permutation;
    Game.puzzle.state = permutation;

    const gridFrameFourByFour = GridFrameFourByFour({
        ...gridFrameFourByFourPlay,
        puzzle: { id: Game.puzzle.id, permutation },
        logic: { getMovableTileIndices, generate16TilePermutation }
    });

    return (
        `
        <section>
            ${gridFrameFourByFour}
        </section>
        `
    );
}

export { PuzzleGame };
