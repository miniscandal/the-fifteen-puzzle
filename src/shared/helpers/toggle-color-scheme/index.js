import { LIGHT } from '@shared-constants/prefers-color-scheme';
import { DARK } from '@shared-constants/prefers-color-scheme';

function toggleColorScheme(theme) {
    const currentTheme = theme.currentName;
    const newTheme = currentTheme === LIGHT ? DARK : LIGHT;

    return newTheme;
}

export { toggleColorScheme };
