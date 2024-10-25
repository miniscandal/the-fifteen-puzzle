import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { practiceModeFunctionality } from '../functionality';


function practiceMode(coreObjects) {
    const settings = {
        html: Practice,
        uiFunctionality: function () { practiceModeFunctionality(coreObjects); }
    };

    return settings;
}

export { practiceMode };
