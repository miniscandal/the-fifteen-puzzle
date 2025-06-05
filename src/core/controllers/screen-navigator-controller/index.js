import { screenHandlers } from '@core-handlers/screens';

import { pushScreenState } from '@feat-screen-navigator/update-screen-state';

import { SCREEN_ID_START } from '@shared-constants/screen-modes';


const ScreenNavigatorController = {
    goToScreen: ({ screenId, ...coreObjects }) => screenHandlers[screenId](coreObjects),
    goToGamePlayScreen: ({ screenId, setupGamePlay, ...coreObjects }) => (
        screenHandlers[screenId]({ setupGamePlay, ...coreObjects })
    ),
    pushScreenState,
    backScreenState: ({ state }) => {
        const { previousId, history } = state;

        history.pop();
        history.pop();


        return {
            currentId: previousId,
            history
        };
    },
    getPreviousScreen: (history) => (history.pop(), history.pop()),
    resetHistory: () => ({
        previousId: null, currentId: SCREEN_ID_START, history: [SCREEN_ID_START]
    }),
};

export { ScreenNavigatorController };
