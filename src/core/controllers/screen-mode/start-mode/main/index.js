import { Start } from '@feat-screen-ui-start/components/pages/start';

import { startModeFunctionality } from '../functionality';


function startMode(coreObjects) {
    const settings = {
        html: Start,
        uiFunctionality: function () { startModeFunctionality(coreObjects); },
    };

    return settings;
}

export { startMode };
