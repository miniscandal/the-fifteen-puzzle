import { StartScreen } from '@feature-start-screen/main';
import { primarySideBar } from '@shared-components/organisms/primary-side-bar/logic/main';
import { navigation } from '@feature-start-screen/components/molecules/navigation/logic/main';

import { START } from '@core-screen-management/constants/screen-names';

function initializeStartScreen({ Game, Screens }) {
    const settings = {
        html: StartScreen({ Game, START }),
        logic: function () {
            primarySideBar({ Game, Screens, START });
            navigation({ Game, Screens });
        },
        symbol: START
    };

    return settings;
}

export { initializeStartScreen };
