import { puzzles } from '@core-game-management/permutations';

import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridPlay } from '@shared-components/organisms/puzzle-grid/variants';

import { getAdjacentTileIndicesInGrid } from '@shared-components/organisms/puzzle-grid/logic/get-adjacent-tile-indices-in-grid';

import { generatePermutation } from '@shared-utils/generate-permutation';

import { TOTAL_TILES } from '@shared-constants/puzzle';

function PuzzleGame({ Game }) {
    const permutation = generatePermutation({ length: TOTAL_TILES });
    const puzzle = Object.values(puzzles).find(puzzle => puzzle.id === Game.puzzle.id);

    Game.puzzle.id = puzzle?.id ?? puzzles.permutationA1.id;
    Game.puzzle.permutation = puzzle?.permutation ?? puzzles.permutationA1.permutation;
    Game.puzzle.state = permutation;

    const puzzleGrid = PuzzleGrid({
        ...puzzleGridPlay,
        puzzle: { id: Game.puzzle.id, permutation },
        logic: { getAdjacentTileIndicesInGrid, generatePermutation }
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
