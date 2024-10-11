import { StartScreen } from '@feature-start-screen/components/pages/start';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { navigation } from '@feature-start-screen/components/molecules/navigation/logic/main';

import { START } from '@core-screen-management/constants/screen-names';

function initializeStartScreen({ Game, Screens }) {
    const screenSymbol = START;
    const settings = {
        html: StartScreen({ Game, screenSymbol }),
        logic: function () {
            primarySideBar({ Game, Screens, screenSymbol });
            navigation({ Game, Screens });
        },
        screenSymbol
    };

    return settings;
}

export { initializeStartScreen };
