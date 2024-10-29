import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { practiceModeFunctionality } from '../functionality';


function practiceMode(coreObjects) {
    return {
        html: Practice,
        uiFunctionality: function () {
            practiceModeFunctionality(coreObjects);
        }
    };
}

export { practiceMode };
