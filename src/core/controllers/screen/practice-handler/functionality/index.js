import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPuzzleGridCollection } from '@shared-dom-elements/buttons';
import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { BTN_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


function uiPracticeFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    setupGamePlay
}) {
    const { ScreenController, PrefersColorSchemeController } = coreControllers;
    const {
        DomScreenSetupController,
        DomScreenManagement: { setSelectedPuzzleGridStyle, enabledButtonPlay }
    } = domActions;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    let puzzleId = null;

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

        puzzleId = puzzleGrid.dataset.puzzleId;

        enabledButtonPlay(document.getElementById(BTN_PLAY_SCREEN_ID));
    });

    domElementButtonSelectPlayScreen().addEventListener('click', () => {


        DomScreenSetupController.setup(ScreenController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay: () => setupGamePlay({ puzzleId })
        }));
    });


    domElementButtonSelectStartScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.goToScreen({
            screenId: SCREEN_ID_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { uiPracticeFunctionality };
