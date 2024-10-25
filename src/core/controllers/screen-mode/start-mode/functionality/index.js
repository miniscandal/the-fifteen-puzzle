import { configureColorSchemePreference } from '@feat-prefers-color-scheme/configure-color-scheme-preference';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';
import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';


function startModeFunctionality(coreObjects) {
    configureColorSchemePreference(coreObjects.PrefersColorSchemeController.appearance);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPlayScreen,
        screenMode: PLAY_SCREEN,
        updateScreenMode
    });

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPracticeScreen,
        screenMode: PRACTICE_SCREEN,
        updateScreenMode
    });
}

export { startModeFunctionality };
