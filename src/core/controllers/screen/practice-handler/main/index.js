import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { uiPracticeFunctionality } from '../functionality';


function practiceHandler({ coreControllers, coreFactories, coreState, domActions }) {
    const { PracticeScreenController: {
        resetInitialScreenState,
        setupGamePlay
    } } = coreControllers;

    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Practice(coreState),
        setupUiLogic: () => uiPracticeFunctionality({
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay
        })
    };
};

export { practiceHandler };
