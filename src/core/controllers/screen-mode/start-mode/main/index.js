import { Start } from '@feat-screen-ui-start/components/pages/start';

import { startModeFunctionality } from '../functionality';


function startMode(coreGameControllers) {

    return {
        html: Start,
        uiFunctionality: () => startModeFunctionality(coreGameControllers)
    };
}

export { startMode };
