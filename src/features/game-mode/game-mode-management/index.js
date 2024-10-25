import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';
import { STAGE_SEQUENCE } from '@shared-constants/stage-sequence';


function gameModeManagement({ GameModeController, PuzzleGridController }) {
    const { currentMode } = GameModeController;

    if (GameModeController.currentMode === undefined) {
        GameModeController.currentMode = GAME_MODE_SEQUENCE;
        PuzzleGridController.puzzle.id = STAGE_SEQUENCE[0];
    }

    GameModeController.currentMode = currentMode === undefined
        ? GAME_MODE_SEQUENCE
        : currentMode;

    return GameModeController.currentMode;
}

export { gameModeManagement };
