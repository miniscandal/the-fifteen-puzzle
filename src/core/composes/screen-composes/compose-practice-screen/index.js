import { Practice } from '@feat-atomic-design-practice-screen/components/pages/practice';

import { setupPracticeScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-practice-screen-ui';

import { domElementButtonSelectThemeToggle } from '@shared-dom-elements/buttons';


function composePracticeScreen({ coreControllers, coreFactories, coreState, domActions }) {
    const { PracticeScreenController: { resetInitialScreenState, setupGamePlay } } = coreControllers;
    const { ScreenManagementDomController } = domActions;

    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Practice(coreState),
        setupUiLogic: () => {
            setupPracticeScreenUiFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                setupGamePlay
            });

            domElementButtonSelectThemeToggle().addEventListener.addEventListener('click', () => {

                ScreenManagementDomController.toggleThemeListener({ coreState });
            });
        }
    };
};

export { composePracticeScreen };
