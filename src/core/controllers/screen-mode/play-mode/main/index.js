import { Play } from '@feat-screen-ui-play/components/pages';
import { PuzzleGridController } from '@core-controllers/puzzle-grid/main';

import { playModeFunctionality } from '../functionality';


function playMode(coreObjects) {
    const settings = {
        html: Play,
        uiFunctionality: function () {
            playModeFunctionality({
                PuzzleGridController,
                ...coreObjects
            });
        }
    };

    return settings;
}

export { playMode };
