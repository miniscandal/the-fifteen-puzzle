import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function gameModeManagement(GameModeController) {
    const { currentMode } = GameModeController;

    GameModeController.currentMode = currentMode === undefined
        ? GAME_MODE_SEQUENCE
        : currentMode;

    return GameModeController.currentMode;
}

export { gameModeManagement };
