import { Start } from '@feat-atomic-design-start-screen/components/pages/start';

import { setupStartScreenUiFunctionality } from '@feat-setup-screen-ui-features/setup-start-screen-ui';


function composeStartScreen({ coreControllers, coreFactories, coreState, domActions }) {
    const { StartScreenController: {
        resetInitialScreenState,
        resetGameState,
        setupGamePlay
    } } = coreControllers;

    resetInitialScreenState({ coreControllers, coreState });

    const { sequence, activePuzzleIndex } = resetGameState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: Start,
        setupUiLogic: () => setupStartScreenUiFunctionality({
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay: () => setupGamePlay({ coreControllers, sequence, activePuzzleIndex })
        })
    };
}

export { composeStartScreen };
