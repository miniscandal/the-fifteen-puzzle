import { Practice } from '@feat-screen-ui-practice/components/pages/practice';

import { uiPracticeFunctionality } from '../functionality';
import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


function practiceHandler({ coreControllers, coreFactories, coreState, domActions }) {
    const setupGamePlay = ({ puzzleId }) => {

        return {
            puzzleId,
            handlePuzzleSolved: () => { }
        };
    };



    const { ScreenState } = coreState;

    const newScreenState = coreControllers.ScreenController.updateScreenState({
        state: ScreenState,
        history: ScreenState.history,
        screenId: SCREEN_ID_PRACTICE
    });

    coreState.ScreenState = newScreenState;

    console.log(coreState.ScreenState);



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
