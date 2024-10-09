import { StartScreen } from '@feature-start-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { navigation } from '@feature-start-screen/components/molecules/navigation/logic/main';

function startScreenSetup({ Game, Screens, screenSymbol }) {

    return {
        html: StartScreen({ Game, screenSymbol }),
        logic: () => {
            primarySideBar({ Game, Screens, screenSymbol });
            navigation({ Game, Screens });
        },
        screenSymbol
    };
}

export { startScreenSetup };
