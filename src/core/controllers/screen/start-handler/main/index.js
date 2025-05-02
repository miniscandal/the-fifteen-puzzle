import { Start } from '@feat-screen-ui-start/components/pages/start';

import { uiStartFunctionality } from '../functionality';


function startHandler({ coreControllers, coreFactories, coreState, domActions }) {
    const {
        ScreenController,
        PuzzleSequenceController
    } = coreControllers;

    const history = ScreenController.resetHistory([]);
    const data = PuzzleSequenceController.reset();

    console.log(history, data);

    const setupGamePlay = () => {

        return {
            puzzleId: PuzzleSequenceController.goToNextPuzzleIdSequence(null),
            handlePuzzleSolved: () => { }
        };
    };


    return {
        prepareHtmlStructure: Start,
        setupUiLogic: () => uiStartFunctionality({
            coreControllers,
            coreFactories,
            coreState,
            domActions,
            setupGamePlay
        })
    };
}

export { startHandler };
