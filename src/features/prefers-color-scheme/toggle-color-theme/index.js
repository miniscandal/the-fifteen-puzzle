import { DARK_THEME } from '@shared-constants/color-themes';
import { LIGHT_THEME } from '@shared-constants/color-themes';

function toggleColorTheme(theme) {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    return newTheme;
}

export { toggleColorTheme };
