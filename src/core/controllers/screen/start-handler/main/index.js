import { Start } from '@feat-screen-ui-start/components/pages/start';

import { uiStartFunctionality } from '../functionality';


function startHandler({ coreControllers, coreFactories, coreState, domActions }) {
    const { StartScreenController: {
        resetInitialScreenState,
        resetGameState,
        setupGamePlay
    } } = coreControllers;

    resetInitialScreenState({ coreControllers, coreState });

    const { sequence, activePuzzleIndex } = resetGameState({ coreControllers, coreState });


    return {
        prepareHtmlStructure: Start,
        setupUiLogic: () => uiStartFunctionality({
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay: () => setupGamePlay({ coreControllers, sequence, activePuzzleIndex })
        })
    };
}

export { startHandler };
