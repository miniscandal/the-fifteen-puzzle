import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPuzzleGridCollection } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
// import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


function uiPracticeFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
}) {
    const { DomScreenSetupController, ScreenController, PrefersColorSchemeController } = coreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPuzzleGridCollection().addEventListener('click', (event) => {
        const attribute = 'data-puzzle-id';
        const puzzleGrid = event.target.closest(`[${attribute}]`);

        console.log(event.target.tagName);


        if (!puzzleGrid) {
            return;
        }

        // const currentPuzzleGridSelected = document.querySelector(`[${attribute}][class~="selected"]`);

        // currentPuzzleGridSelected?.classList.remove('selected');
        // PuzzleGridController.puzzle.id = puzzleGrid.dataset.puzzleId;
        // puzzleGrid.classList.add('selected');
        // document.getElementById(SELECT_GAME_SCREEN_PLAY_ID).classList.add('enabled');
    });


    // addEventListenerSelectScreenMode({
    //     getElement: domElementButtonSelectPlayScreen,
    //     updateScreenMode: () => {
    //         const { id: puzzleId } = PuzzleGridController.puzzle;

    //         if (!puzzleId) {
    //             return;
    //         }

    //         DomScreenSetupController.setup(ScreenController.transitionTo({
    //             screenId: GAME_SCREEN_PLAY,
    //             coreControllers,
    //             gameModeFunctionality: () => { return { puzzleId }; }
    //         }));
    //     }
    // });


    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PLAY,
            coreControllers
        }));
    });


    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.goToScreen({
            screenId: GAME_SCREEN_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { uiPracticeFunctionality };
