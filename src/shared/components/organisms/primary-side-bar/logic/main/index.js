import { iconButtonToggleColorScheme } from '@shared-components/molecules/icon-button-toggle-theme/logic/main';
import { selectStartScreen } from '../select-start-screen';

import { START } from '@core-screen-management/constants/screen-names';

function primarySideBar({ Game, Screens, screenSymbol }) {
    iconButtonToggleColorScheme({ appearance: Game.appearance });

    if (screenSymbol !== START) {
        selectStartScreen({ Game, Screens, screenSymbol });
    }
}

export { primarySideBar };
