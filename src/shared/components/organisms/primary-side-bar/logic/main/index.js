import { iconButtonAppearanceTheme } from '@shared-components/molecules/icon-button-appearance-theme/logic/main';
import { selectStartScreen } from '../select-start-screen';

import { START } from '@core-screen-management/constants/screen-names';

function primarySideBar({ Game, Screens, screenSymbol }) {
    iconButtonAppearanceTheme({ appearance: Game.appearance });

    if (screenSymbol !== START) {
        selectStartScreen({ Game, Screens, screenSymbol });
    }
}

export { primarySideBar };
