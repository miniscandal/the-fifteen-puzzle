import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { selectPuzzleGrid } from '@feat-game-mode/select-puzzle-grid';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function uiPracticeFunctionality({
    GameModeController,
    DomScreenSetupController,
    ScreenController,
    PuzzleGridController,
    PuzzleSequenceController,
    PrefersColorSchemeController
}) {
    const GameCoreControllers = {
        DomScreenSetupController,
        PrefersColorSchemeController,
        GameModeController,
        ScreenController,
        PuzzleSequenceController,
        PuzzleGridController
    };

    selectPuzzleGrid({ PuzzleGridController });

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    // addEventListenerSelectScreenMode({
    //     getElement: domElementButtonSelectPlayScreen,
    //     updateScreenMode: () => {
    //         const { id: puzzleId } = PuzzleGridController.puzzle;

    //         if (!puzzleId) {
    //             return;
    //         }

    //         DomScreenSetupController.setup(ScreenController.transitionTo({
    //             screenId: GAME_SCREEN_PLAY,
    //             GameCoreControllers,
    //             gameModeFunctionality: () => { return { puzzleId }; }
    //         }));
    //     }
    // });


    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PLAY,
            GameCoreControllers
        }));
    });


    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_START,
            GameCoreControllers
        }));
    });

    GameModeController.currentMode = GAME_MODE_PRACTICE;
}

export { uiPracticeFunctionality };
