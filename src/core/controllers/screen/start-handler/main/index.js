import { Start } from '@feat-screen-ui-start/components/pages/start';

import { uiStartFunctionality } from '../functionality';

import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function startHandler({ coreControllers, coreFactories }) {
    const {
        GameModeController,
        ScreenController,
        PuzzleSequenceController
    } = coreControllers;

    const gamePlaySetup = () => {
        GameModeController.mode = GAME_MODE_SEQUENCE;
        ScreenController.clearScreenHistory();
        PuzzleSequenceController.reset();


        return {
            puzzleId: PuzzleSequenceController.goToNextPuzzleIdSequence(null)
        };
    };

    return {
        htmlFunctionality: Start,
        uiFunctionality: () => uiStartFunctionality({ coreControllers, coreFactories, gamePlaySetup })
    };
}

export { startHandler };
