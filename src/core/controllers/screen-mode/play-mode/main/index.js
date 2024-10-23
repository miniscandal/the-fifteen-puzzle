import { Play } from '@feat-screen-ui-play/components/pages';

import { playModeFunctionality } from '../functionality';

import { PLAY_SCREEN } from '@shared-constants/screen-modes';


function playMode(coreObjects) {
    const settings = {
        html: Play,
        uiFunctionality: function () { playModeFunctionality(coreObjects); },
        screenName: PLAY_SCREEN
    };

    return settings;
}

export { playMode };
