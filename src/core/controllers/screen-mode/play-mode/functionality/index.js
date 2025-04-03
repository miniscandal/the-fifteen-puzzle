import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectBackScreen, domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { getAdjacentIndicesInGrid } from '@shared-utils/get-adjacent-indices-in-grid';
import { getItemPositionInGrid } from '@shared-utils/get-item-position-in-grid';
import { createPermutation, shufflePuzzleState } from '@shared-utils/game-state-generate';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';


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
    const state = shufflePuzzleState(createPermutation());
    const coreGameControllers = {
        ScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenModeController,
        PuzzleGridController
    };
    const onSelectPuzzleTile = (index) => {
        const state = PuzzleGridController.updateState(index);
        const isSolved = PuzzleGridController.checkState(state);

        if (isSolved) {
            // code
        }
    };

    const movableTileIndices = getAdjacentIndicesInGrid(getItemPositionInGrid(state.map(mappedPos => (
        puzzle.permutation[mappedPos]
    ))));

    PuzzleGridController.puzzle = {
        ...puzzle,
        state,
        movableTileIndices
    };

    renderPuzzleScene({ puzzle: PuzzleGridController.puzzle });
    selectPuzzleTile({ onSelectPuzzleTile });
    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectBackScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: ScreenModeController.lastModeHistory(),
                coreGameControllers
            }));
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.transitionTo({
                modeId: GAME_SCREEN_START,
                coreGameControllers
            }));
        }
    });
}

export { playModeFunctionality };
