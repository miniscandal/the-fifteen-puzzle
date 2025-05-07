import { Start } from '@feat-screen-ui-start/components/pages/start';

import { uiStartFunctionality } from '../functionality';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';


function startHandler({ coreControllers, coreFactories, coreState, domActions }) {
    const {
        ScreenController,
        PuzzleSequenceController
    } = coreControllers;
    const newScreenState = ScreenController.resetHistory(SCREEN_ID_START);

    coreState.ScreenState = { ...newScreenState };

    const data = PuzzleSequenceController.reset();

    console.log('data', data);

    const setupGamePlay = ({ puzzleId }) => {

        return {
            puzzleId,
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
            setupGamePlay: () => setupGamePlay({
                puzzleId: PuzzleSequenceController.goToNextPuzzleIdSequence(null)
            })
        })
    };
}

export { startHandler };
