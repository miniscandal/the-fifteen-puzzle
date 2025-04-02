import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';

import { getAdjacentIndicesInGrid } from '@shared-utils/get-adjacent-indices-in-grid';
import { getItemPositionInGrid } from '@shared-utils/get-item-position-in-grid';
import { createPermutation, shuffleSimplePuzzleState } from '@shared-utils/game-state-generate';


async function playModeFunctionality({
    GameModeController,
    PuzzleGridController,
    ScreenSetupController,
    ScreenModeController,
    PrefersColorSchemeController,
}) {
    const { currentMode, modes } = GameModeController;
    const { puzzleId } = modes[currentMode]({ PuzzleGridController });
    const { puzzle } = await loadPuzzle({ puzzleId });
    const state = shuffleSimplePuzzleState(createPermutation());
    const onSelectPuzzleTile = (index) => {
        const state = PuzzleGridController.updateState(index);
        const isSolved = PuzzleGridController.checkState(state);

        //TODO: implement modal component
        console.log(isSolved);
    };

    PuzzleGridController.puzzle = {
        ...puzzle,
        state: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        movableTileIndices: getAdjacentIndicesInGrid(getItemPositionInGrid([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
    };

    renderPuzzleScene({ puzzle: PuzzleGridController.puzzle });
    selectPuzzleTile({ onSelectPuzzleTile });
    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectBackScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: ScreenModeController.lastModeHistory(),
                coreControllers: {
                    ScreenSetupController,
                    PrefersColorSchemeController,
                    GameModeController,
                    ScreenModeController,
                    PuzzleGridController
                }
            }));
        }
    });
}

export { playModeFunctionality };
