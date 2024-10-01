import { PlayScreen } from '@feature-play-screen/main';
import { gameSettingsLogic } from '@shared-components/organisms/game-settings';


function playScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PlayScreen({ Game, screenId }),
        logic: () => {
            gameSettingsLogic({ Game, Screens, screenId });
        },
        name: screenId
    };
}

export { playScreenSetup };
