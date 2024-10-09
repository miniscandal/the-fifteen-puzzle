import { StartScreen } from '@feature-start-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { navigation } from '@feature-start-screen/components/molecules/navigation/logic/main';

function startScreenSetup({ Game, Screens, screenId }) {

    return {
        html: StartScreen({ Game, screenId }),
        logic: () => {
            primarySideBar({ Game, Screens, screenId });
            navigation({ Game, Screens });
        },
        name: screenId
    };
}

export { startScreenSetup };
