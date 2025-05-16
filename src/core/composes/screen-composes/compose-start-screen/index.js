import { Start } from '@feat-atomic-design-start-screen/components/pages/start';

import { setupStartScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-start-screen-ui';

import { domElementButtonSelectThemeToggle } from '@shared-dom-elements/buttons';


function composeStartScreen({ coreControllers, coreFactories, coreState, domActions }) {
    const { StartScreenController: {
        resetInitialScreenState,
        resetGameState,
        setupGamePlay
    } } = coreControllers;
    const { ScreenManagementDomController } = domActions;
    const { sequence, activePuzzleIndex } = resetGameState({ coreControllers, coreState });

    resetInitialScreenState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: () => Start(coreState),
        setupUiLogic: () => {
            setupStartScreenUiFunctionality({
                coreControllers,
                coreFactories,
                coreState,
                domActions,
                setupGamePlay: () => setupGamePlay({ coreControllers, sequence, activePuzzleIndex })
            });

            domElementButtonSelectThemeToggle().addEventListener.addEventListener('click', () => {

                ScreenManagementDomController.toggleThemeListener({ coreState });
            });
        }
    };
}

export { composeStartScreen };
