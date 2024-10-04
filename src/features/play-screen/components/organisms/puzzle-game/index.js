import { puzzles } from '@core-game-management/permutations';
import { GridFrameFourByFour } from '@shared-components/molecules/grid-frame-four-by-four';
import { gridFrameFourByFourPlay } from '@shared-components/molecules/grid-frame-four-by-four/variants';
import { TOTAL_TILES } from '@shared-constants/puzzle';
import { generate16TilePermutation } from '@shared-utils/generate-permutation';

function PuzzleGame({ Game }) {
    const state = generate16TilePermutation({ length: TOTAL_TILES });

    // Fisher-Yates shuffle algorithm: Randomly shuffles the elements of the array in place
    for (let i = state.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [state[i], state[j]] = [state[j], state[i]];
    }

    const puzzle = Object.values(puzzles).find(puzzle => puzzle.id === Game.puzzle.id);
    Game.puzzle.id = puzzle?.id ?? puzzles.permutationA1.id;
    Game.puzzle.permutation = puzzle?.permutation ?? puzzles.permutationA1.permutation;
    Game.puzzle.state = state;

    const gridFrameFourByFour = GridFrameFourByFour({
        ...gridFrameFourByFourPlay,
        puzzle: { id: Game.puzzle.id, permutation: Game.puzzle.state }
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
