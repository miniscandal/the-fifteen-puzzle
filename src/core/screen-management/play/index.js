import { PlayScreen } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-helpers/selectable-tiles';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';


function playScreenSetup({ Game, Screens, screenId }) {

    return {
        html: PlayScreen({ Game, screenId }),
        logic: () => {
            primarySideBar({ Game, Screens, screenId });
            selectPuzzleTile({ Game });
        },
        name: screenId
    };
}

export { playScreenSetup };
