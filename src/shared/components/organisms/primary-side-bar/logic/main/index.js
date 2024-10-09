import { applicationTheme } from '@shared-components/molecules/application-theme/logic/main';
import { navigationMenu } from '@shared-components/molecules/navigation-menu/logic/main';

function primarySideBar({ Game, Screens, screenId }) {
    applicationTheme({ Game });
    navigationMenu({ Game, Screens, screenId });
}

export { primarySideBar };
