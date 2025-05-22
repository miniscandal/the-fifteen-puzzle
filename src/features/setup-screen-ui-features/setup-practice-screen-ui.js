import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_START } from '@shared-constants/screen-modes';
import { BTN_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


function setupPracticeScreenUiFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    domElementAccessors,
    setupGamePlay
}) {
    const { ScreenNavigatorController } = coreControllers;
    const {
        ScreenSetupDomController,
        ScreenManagementDomController: { setSelectedPuzzleGridStyle, enabledButtonPlay }
    } = domActions;
    const {
        ButtonsDomElementAccessors: { getStartScreenButton, getPlayScreenButton, getPuzzleGridCollection }
    } = domElementAccessors;


    let puzzleId = null;

    getPuzzleGridCollection().addEventListener('click', (event) => {
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

    getPlayScreenButton().addEventListener('click', () => {
        if (!puzzleId) {

            return;
        }

        ScreenSetupDomController.setup(ScreenNavigatorController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            domElementAccessors,
            setupGamePlay: () => setupGamePlay({ puzzleId })
        }));
    });

    getStartScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_START,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            domElementAccessors
        }));
    });
}

export { setupPracticeScreenUiFunctionality };
