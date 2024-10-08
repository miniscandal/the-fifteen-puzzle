import { PlayScreen } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-components/molecules/grid-frame-four-by-four';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';


function playScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PlayScreen({ Game, screenId }),
        logic: () => {
            gameSettingsLogic({ Game, Screens, screenId });
            selectPuzzleTile({ Game });
        },
        name: screenId
    };
}

export { playScreenSetup };
