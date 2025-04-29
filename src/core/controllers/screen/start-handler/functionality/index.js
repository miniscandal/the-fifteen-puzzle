import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { SCREEN_ID_PLAY } from '@shared-constants/screen-modes';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


function uiStartFunctionality({
    coreControllers,
    coreFactories,
    coreState,
    domActions,
    setupGamePlay
}) {
    const { DomScreenSetupController, ScreenController, PrefersColorSchemeController } = coreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.goToGamePlayScreen({
            screenId: SCREEN_ID_PLAY,
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay
        }));
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.goToScreen({
            screenId: SCREEN_ID_PRACTICE,
            coreControllers,
            coreFactories,
            coreState,
            domActions
        }));
    });
}

export { uiStartFunctionality };
