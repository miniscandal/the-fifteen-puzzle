import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function isInitializedGameMode(GameModeController) {
    const { currentMode } = GameModeController;

    GameModeController.currentMode = currentMode === undefined
        ? GAME_MODE_SEQUENCE
        : currentMode;

    return GameModeController.currentMode;
}

export { isInitializedGameMode };
