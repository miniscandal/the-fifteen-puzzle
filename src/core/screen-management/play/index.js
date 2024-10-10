import { PlayScreen } from '@feature-play-screen/main';
import { selectPuzzleTile } from '@shared-components/molecules/puzzle-tile/logic/selectable-tiles';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';

function playScreenSetup({ Game, Screens, screenSymbol }) {
    const setup = {
        html: PlayScreen({ Game, screenSymbol }),
        logic: () => {
            primarySideBar({ Game, Screens, screenSymbol });
            selectPuzzleTile({ Game });
        }
    };

    return setup;
}

export { playScreenSetup };
