import { Play } from '@feat-screen-ui-play/components/pages';

import { playModeFunctionality } from '../functionality';


function playMode(coreObjects) {
    const settings = {
        html: Play,
        uiFunctionality: function () { playModeFunctionality(coreObjects); }
    };

    return settings;
}

export { playMode };
