
import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


function setupStartScreenUiFunctionality({
    coreControllers,
    coreState,
    domActions,
    domElementAccessors,
    setupGamePlay,
    ...coreObjects
}) {
    const { ScreenNavigatorController } = coreControllers;
    const { ScreenManagementDomController: { toggleThemeListener }, ScreenSetupDomController } = domActions;
    const { ButtonsDomElementAccessors: {
        getPracticeScreenButton, getPlayScreenButton, getThemeToggleButton
    } } = domElementAccessors;


    getThemeToggleButton().addEventListener('click', () => toggleThemeListener({ coreState }));

    getPlayScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreState,
            domActions,
            domElementAccessors,
            setupGamePlay,
            ...coreObjects
        }));
    });

    getPracticeScreenButton().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_PRACTICE,
            coreControllers,
            coreState,
            domActions,
            domElementAccessors,
            ...coreObjects
        }));
    });
}

export { setupStartScreenUiFunctionality };
