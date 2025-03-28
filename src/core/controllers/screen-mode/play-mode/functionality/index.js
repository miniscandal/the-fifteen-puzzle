import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

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

    PuzzleGridController.puzzle = {
        ...PuzzleGridController.puzzle,
        id: puzzle.id,
        permutation: puzzle.permutation
    };

    // TODO: Desacoplar codigo de esta funcion, para el estado

    renderPuzzleScene({ puzzle });

    const onSelectPuzzleTile = (index) => PuzzleGridController.updateState(index);
    selectPuzzleTile({ onSelectPuzzleTile });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.routine(ScreenModeController.modes[GAME_SCREEN_START]());
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectBackScreen,
        updateScreenMode: () => {
            const lastScreenMode = ScreenModeController.lastModeHistory();

            ScreenSetupController.routine(ScreenModeController.modes[lastScreenMode]());
        }
    });
}

export { playModeFunctionality };
