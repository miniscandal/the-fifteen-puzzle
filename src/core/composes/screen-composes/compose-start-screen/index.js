import { Start } from '@feat-atomic-design-start-screen/components/pages/start';

import { setupStartScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-start-screen-ui';


function composeStartScreen({ coreControllers, coreFactories, coreState, domActions, domElementAccessors }) {
    const { StartScreenController: {
        resetInitialScreenState,
        resetGameState,
        setupGamePlay
    } } = coreControllers;
    const { ScreenManagementDomController } = domActions;
    const { sequence, activePuzzleIndex } = resetGameState({ coreControllers, coreState });
    const { ButtonsDomElementAccessors: { getThemeToggleButton } } = domElementAccessors;


    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Start(coreState),
        setupUiLogic: () => {
            setupStartScreenUiFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                domElementAccessors,
                setupGamePlay: () => setupGamePlay({ coreControllers, sequence, activePuzzleIndex })
            });

            getThemeToggleButton().addEventListener('click', () => {

                ScreenManagementDomController.toggleThemeListener({ coreState });
            });
        }
    };
}

export { composeStartScreen };
