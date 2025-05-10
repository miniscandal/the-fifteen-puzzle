import { SCREEN_ID_PRACTICE } from '@shared-constants/screen-modes';


const PracticeScreenController = {
    resetInitialScreenState: ({ coreControllers, coreState }) => {
        const { ScreenState } = coreState;
        const newScreenState = coreControllers.ScreenNavigatorController.updateScreenState({
            state: ScreenState,
            history: ScreenState.history,
            screenId: SCREEN_ID_PRACTICE
        });

        coreState.ScreenState = newScreenState;
    },
    setupGamePlay: ({ puzzleId }) => {


        return {
            puzzleId,
            handlePuzzleSolved: () => { }
        };
    }
};

export { PracticeScreenController };
