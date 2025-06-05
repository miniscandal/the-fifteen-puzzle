import { Practice } from '@feat-atomic-design-practice-screen/components/pages/practice';

import { setupPracticeScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-practice-screen-ui';


function composePracticeScreen({ coreControllers, coreState, ...coreObjects }) {
    const { PracticeScreenController: {
        resetInitialScreenState, setupGamePlay
    } } = coreControllers;

    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Practice(coreState),
        setupUiLogic: () => (
            setupPracticeScreenUiFunctionality({
                coreControllers,
                coreState,
                setupGamePlay,
                ...coreObjects
            })
        )
    };
};

export { composePracticeScreen };
