import { Start } from '@feat-screen-ui-start/components/pages/start';

import { startModeFunctionality } from '../functionality';


function startMode(coreObjects) {
    return {
        html: Start,
        uiFunctionality: function () {
            startModeFunctionality(coreObjects);
        },
    };
}

export { startMode };
