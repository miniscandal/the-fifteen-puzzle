import { Play } from '@feat-screen-ui-play/components/pages';

import { playModeFunctionality } from '../functionality';


function playMode(coreObjects) {
    return {
        html: Play,
        uiFunctionality: function () {
            playModeFunctionality(coreObjects);
        }
    };
}

export { playMode };
