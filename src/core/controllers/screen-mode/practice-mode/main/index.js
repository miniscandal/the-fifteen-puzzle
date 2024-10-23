import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { practiceModeFunctionality } from '../functionality';

import { PRACTICE_SCREEN } from '@shared-constants/screen-modes';


function practiceMode(coreObjects) {
    const settings = {
        html: Practice,
        uiFunctionality: function () { practiceModeFunctionality(coreObjects); },
        screenName: PRACTICE_SCREEN
    };

    return settings;
}

export { practiceMode };
