import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


function setupStartScreenUiFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    setupGamePlay
}) {
    const { ScreenNavigatorController } = coreControllers;
    const { ScreenSetupDomController } = domActions;

    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay
        }));
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {

        ScreenSetupDomController.setup(ScreenNavigatorController.goToScreen({
            screenId: SCREEN_ID_PRACTICE,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { setupStartScreenUiFunctionality };
