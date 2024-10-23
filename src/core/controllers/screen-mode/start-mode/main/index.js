import { Start } from '@feat-screen-ui-start/components/pages/start';

import { startModeFunctionality } from '../functionality/ui-functionality';

import { START_SCREEN } from '@shared-constants/screen-modes';

function startMode(coreObjects) {
    const settings = {
        html: Start,
        uiFunctionality: function () { startModeFunctionality(coreObjects); },
        screenName: START_SCREEN
    };

    return settings;
}

export { startMode };
