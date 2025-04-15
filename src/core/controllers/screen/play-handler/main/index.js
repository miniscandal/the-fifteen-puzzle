import { Play } from '@feat-screen-ui-play/components/pages';

import { uiPlayFunctionality } from '../functionality';


function playHandler(GameCoreControllers, GamePlaySetup) {

    return {
        htmlFunctionality: () => Play(GameCoreControllers),
        uiFunctionality: () => uiPlayFunctionality(GameCoreControllers, GamePlaySetup)
    };
}

export { playHandler };
