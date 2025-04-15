import { Start } from '@feat-screen-ui-start/components/pages/start';

import { uiStartFunctionality } from '../functionality';

import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function startHandler(GameCoreControllers, GameCoreFactories) {
    const { GameModeController, ScreenController, PuzzleSequenceController } = GameCoreControllers;

    const GamePlaySetup = () => {
        GameModeController.mode = GAME_MODE_SEQUENCE;
        ScreenController.clearScreenHistory();
        PuzzleSequenceController.reset();


        return {
            puzzleId: PuzzleSequenceController.goToNextPuzzleIdSequence(null)
        };
    };

    return {
        htmlFunctionality: Start,
        uiFunctionality: () => uiStartFunctionality(GameCoreControllers, GameCoreFactories, GamePlaySetup)
    };
}

export { startHandler };
