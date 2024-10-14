import { PuzzleGrid } from '@shared-components/organisms/puzzle-grid';

import { puzzleGridPlay } from '@shared-components/organisms/puzzle-grid/variants';

function PuzzleGame() {
    const puzzleGrid = PuzzleGrid(puzzleGridPlay);

    return (
        `
        <section>
            ${puzzleGrid}
        </section>
        `
    );
}

export { PuzzleGame };
