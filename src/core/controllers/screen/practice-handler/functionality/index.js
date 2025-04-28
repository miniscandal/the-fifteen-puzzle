import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPuzzleGridCollection } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_START } from '@shared-constants/screen-modes';
import { SELECT_GAME_SCREEN_PLAY_ID } from '@shared-constants/dom-element-identifiers';


function uiPracticeFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
}) {
    const { DomScreenSetupController, ScreenController, PrefersColorSchemeController } = coreControllers;
    const { DomPuzzleGrid: { setSelectedPuzzleGridStyle } } = domActions;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPuzzleGridCollection().addEventListener('click', (event) => {
        const attribute = 'data-puzzle-id';
        const puzzleGrid = event.target.closest(`[${attribute}]`);

        if (!puzzleGrid) {
            return;
        }

        setSelectedPuzzleGridStyle({
            selectedPuzzle: puzzleGrid,
            previousSelectedPuzzle: document.querySelector(`[${attribute}][class~="selected"]`)
        });

        // puzzleGrid.dataset.puzzleId

        document.getElementById(SELECT_GAME_SCREEN_PLAY_ID).classList.add('enabled');
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
