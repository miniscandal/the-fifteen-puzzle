import { StartScreen } from '@feature-start-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { navigation } from '@feature-start-screen/components/molecules/navigation/logic/main';

function startScreenSetup({ Game, Screens, screenSymbol }) {
    const setup = {
        html: StartScreen({ Game, screenSymbol }),
        logic: () => {
            primarySideBar({ Game, Screens, screenSymbol });
            navigation({ Game, Screens });
        }
    };

    return setup;
}

export { startScreenSetup };
