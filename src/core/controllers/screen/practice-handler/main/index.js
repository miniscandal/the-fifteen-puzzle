import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { uiPracticeFunctionality } from '../functionality';


function practiceHandler({ coreControllers, coreFactories, coreState, domActions }) {

    return {
        prepareHtmlStructure: () => Practice(coreState),
        setupUiLogic: () => uiPracticeFunctionality({
            coreControllers,
            coreFactories,
            coreState,
            domActions
        })
    };
};

export { practiceHandler };
