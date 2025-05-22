import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


function setupStartScreenUiFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    domElementAccessors,
    setupGamePlay
}) {
    const { ScreenNavigatorController } = coreControllers;
    const { ScreenSetupDomController } = domActions;
    const { ButtonsDomElementAccessors: { getPracticeScreenButton, getPlayScreenButton } } = domElementAccessors;

    getPlayScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            domElementAccessors,
            setupGamePlay
        }));
    });

    getPracticeScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_PRACTICE,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            domElementAccessors
        }));
    });
}

export { setupStartScreenUiFunctionality };
