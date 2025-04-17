import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { uiPracticeFunctionality } from '../functionality';


function practiceHandler(coreControllers) {

    return {
        htmlFunctionality: () => Practice(coreControllers),
        uiFunctionality: () => uiPracticeFunctionality(coreControllers)
    };
};

export { practiceHandler };
