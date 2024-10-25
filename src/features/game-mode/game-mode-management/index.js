import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';


function gameModeManagement({ GameModeController }) {
    const { currentMode } = GameModeController;

    if (currentMode === undefined) {
        GameModeController.currentMode = GAME_MODE_SEQUENCE;
    }

    return GameModeController.currentMode;
}

export { gameModeManagement };
