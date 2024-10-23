import { prefersColorScheme } from '@feat-prefers-color-scheme/main';
import { addEventListenerSelectScreenMode } from '@feat-screen-mode/add-event-listener-select-screen-mode';

import { domElementButtonSelectStartScreen } from '@shared-dom-elements/buttons';

import { START_SCREEN } from '@shared-constants/screen-modes';


function practiceModeFunctionality(coreObjects) {
    prefersColorScheme(coreObjects.PrefersColorSchemeController);

    addEventListenerSelectScreenMode({
        coreObjects,
        getElement: domElementButtonSelectStartScreen,
        screenMode: START_SCREEN
    });
}

export { practiceModeFunctionality };
