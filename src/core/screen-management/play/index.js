import { PlayScreen } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-helpers/selectable-tiles';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';


function playScreenSetup({ Game, Screens, screenSymbol }) {

    return {
        html: PlayScreen({ Game, screenSymbol }),
        logic: () => {
            primarySideBar({ Game, Screens, screenSymbol });
            selectPuzzleTile({ Game });
        },
        screenSymbol
    };
}

export { playScreenSetup };
