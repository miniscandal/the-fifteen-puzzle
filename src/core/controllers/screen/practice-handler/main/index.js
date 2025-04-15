import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { uiPracticeFunctionality } from '../functionality';


function practiceHandler(GameCoreControllers) {

    return {
        htmlFunctionality: () => Practice(GameCoreControllers),
        uiFunctionality: () => uiPracticeFunctionality(GameCoreControllers)
    };
};

export { practiceHandler };
