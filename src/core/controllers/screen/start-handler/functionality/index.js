import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';


function uiStartFunctionality({ coreControllers, coreFactories, gamePlaySetup }) {
    const {
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = coreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PLAY,
            coreControllers,
            coreFactories,
            gamePlaySetup
        }));
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PRACTICE,
            coreControllers,
            coreFactories
        }));
    });
}

export { uiStartFunctionality };
