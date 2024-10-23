import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/event-listener-select-screen-mode';

import { domElementButtonSelectPlayScreen } from '@shared-dom-elements/buttons';
import { domElementButtonSelectPracticeScreen } from '@shared-dom-elements/buttons';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';
import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';


function startModeFunctionality(coreObjects) {
    prefersColorScheme(coreObjects.PrefersColorSchemeController);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPlayScreen,
        screenMode: PLAY_SCREEN
    });

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectPracticeScreen,
        screenMode: PRACTICE_SCREEN
    });
}

export { startModeFunctionality };
