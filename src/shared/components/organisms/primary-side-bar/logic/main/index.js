import { iconButtonToggleColorScheme } from '@shared-components/molecules/icon-button-toggle-theme/logic/main';
import { navigationMenu } from '@shared-components/molecules/navigation-menu/logic/main';

function primarySideBar({ Game, Screens, screenSymbol }) {
    iconButtonToggleColorScheme({ Game });
    navigationMenu({ Game, Screens, screenSymbol });
}

export { primarySideBar };
