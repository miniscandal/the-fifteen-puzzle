import { IconButton } from '@shared-components/atoms/icon-button';

import { iconButtonColorTheme } from './variant';

import './style.css';

function IconButtonColorTheme() {
    const iconButton = IconButton(iconButtonColorTheme.iconButton);

    return (
        `
        <div>
            ${iconButton}
        </div>
        `
    );
}

export { IconButtonColorTheme };
