import { Play } from '@feat-screen-ui-play/components/pages';

import { playModeFunctionality } from '../functionality';


function playMode(coreGameControllers) {

    return {
        html: () => Play({ coreGameControllers }),
        uiFunctionality: () => playModeFunctionality(coreGameControllers)
    };
}

export { playMode };
