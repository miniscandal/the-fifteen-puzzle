import { sequenceMode } from '@core-controllers/game-mode/sequence-mode/main';
import { practiceMode } from '@core-controllers/game-mode/practice-mode/main';

import { GAME_MODE_SEQUENCE } from '@shared-constants/game-modes';
import { GAME_MODE_PRACTICE } from '@shared-constants/game-modes';


const GameModeController = {
    modes: {
        [GAME_MODE_SEQUENCE]: (coreObjects) => sequenceMode(coreObjects),
        [GAME_MODE_PRACTICE]: (coreObjects) => practiceMode(coreObjects)
    },
    currentMode: undefined
};

export { GameModeController };
