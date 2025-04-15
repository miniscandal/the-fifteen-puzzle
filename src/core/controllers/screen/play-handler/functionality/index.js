import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';
import { renderPuzzleScene } from '@feat-puzzle-scene/render-puzzle-scene';
import { selectPuzzleTile } from '@feat-puzzle-grid/select-puzzle-tile';
import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectBackScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { getAdjacentIndicesInGrid } from '@shared-utils/get-adjacent-indices-in-grid';
import { getItemPositionInGrid } from '@shared-utils/get-item-position-in-grid';

import { createPermutation } from '@shared-utils/game-state-generate';
import { shufflePuzzleState } from '@shared-utils/game-state-generate';

import { GAME_SCREEN_START } from '@shared-constants/screen-modes';


async function uiPlayFunctionality({
    GameModeController,
    PuzzleGridController,
    ScreenSetupController,
    ScreenController,
    PuzzleSequenceController,
    PrefersColorSchemeController
}, GamePlaySetup) {
    const { puzzleId } = GamePlaySetup();
    const { puzzle } = await loadPuzzle({ puzzleId });
    const state = shufflePuzzleState(createPermutation());
    const GameCoreControllers = {
        GameModeController,
        PuzzleGridController,
        ScreenSetupController,
        ScreenController,
        PuzzleSequenceController,
        PrefersColorSchemeController
    };
    const onSelectPuzzleTile = (index, selectedTileIndex) => {
        PuzzleGridController.updateState(index, selectedTileIndex);
        const { isSolved } = PuzzleGridController;

        if (isSolved) {
            console.log(isSolved);
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
            PuzzleGridController.puzzle.id = null;
            ScreenSetupController.setup(ScreenController.transitionTo({
                screenId: ScreenController.getLastVisitedScreen(),
                GameCoreControllers
            }));
        }
    });

    addEventListenerSelectScreenMode({
        getElement: domElementButtonSelectStartScreen,
        updateScreenMode: () => {
            ScreenSetupController.setup(ScreenController.transitionTo({
                screenId: GAME_SCREEN_START,
                GameCoreControllers
            }));
        }
    });
}

export { uiPlayFunctionality };
