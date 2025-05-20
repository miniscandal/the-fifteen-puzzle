import { Practice } from '@feat-atomic-design-practice-screen/components/pages/practice';

import { setupPracticeScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-practice-screen-ui';


function composePracticeScreen({ coreControllers, coreFactories, coreState, domActions, domElementAccessors }) {
    const { PracticeScreenController: { resetInitialScreenState, setupGamePlay } } = coreControllers;
    const { ScreenManagementDomController } = domActions;
    const { ButtonsDomElementAccessors: { getThemeToggleButton } } = domElementAccessors;

    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Practice(coreState),
        setupUiLogic: () => {
            setupPracticeScreenUiFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                domElementAccessors,
                setupGamePlay
            });

            getThemeToggleButton().addEventListener('click', () => {

                ScreenManagementDomController.toggleThemeListener({ coreState });
            });
        }
    };
};

export { composePracticeScreen };
