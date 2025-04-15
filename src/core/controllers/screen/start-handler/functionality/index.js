import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { GAME_SCREEN_PLAY } from '@shared-constants/screen-modes';
import { GAME_SCREEN_PRACTICE } from '@shared-constants/screen-modes';


function uiStartFunctionality(GameCoreControllers, GameCoreFactories, GamePlaySetup) {
    const {
        DomScreenSetupController,
        ScreenController,
        PrefersColorSchemeController
    } = GameCoreControllers;

    configureColorSchemePreference(PrefersColorSchemeController.appearance);

    domElementButtonSelectPlayScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PLAY,
            GameCoreControllers,
            GameCoreFactories,
            GamePlaySetup
        }));
    });

    domElementButtonSelectPracticeScreen().addEventListener('click', () => {

        DomScreenSetupController.setup(ScreenController.transitionTo({
            screenId: GAME_SCREEN_PRACTICE,
            GameCoreControllers,
            GameCoreFactories
        }));
    });
}

export { uiStartFunctionality };
