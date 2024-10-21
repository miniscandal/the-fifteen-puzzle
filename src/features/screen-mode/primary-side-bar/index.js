import { selectStartScreen } from '../select-start-screen';

function primarySideBar({ ScreenModeController, PrefersColorSchemeController }) {
    selectStartScreen({ ScreenModeController, PrefersColorSchemeController });
}

export { primarySideBar };
