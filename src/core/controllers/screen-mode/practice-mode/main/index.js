import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { practiceModeFunctionality } from '../functionality';


function practiceMode(coreGameControllers) {

    return {
        html: () => Practice({ coreGameControllers }),
        uiFunctionality: () => practiceModeFunctionality(coreGameControllers)
    };
};

export { practiceMode };
