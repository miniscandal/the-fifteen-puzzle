import { IconButton } from '@shared-components/atoms/icon-button';

import { iconButtonAppearanceTheme } from '@shared-components/atoms/icon-button/variants';


import './style.css';

function IconButtonAppearanceTheme() {
    const iconButtonTheme = IconButton(iconButtonAppearanceTheme.variant);

    return (
        `
        <div>
            ${iconButtonTheme}
        </div>
        `
    );
}

export { IconButtonAppearanceTheme };
