import { DARK_THEME, LIGHT_THEME } from '@shared-constants/color-themes';

function updateAppearanceTheme(appearance) {
    appearance.theme.current = appearance.theme.current === LIGHT_THEME
        ? DARK_THEME
        : LIGHT_THEME;
}

export { updateAppearanceTheme };
