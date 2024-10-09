import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import './style.css';

function NavigationMenu({ screenId }) {
    if (screenId === 'start') {
        return '';
    }

    const iconButtonMainMenu = ButtonSelectScreen({ text: 'back', id: 'back' });

    return (
        `
        <div>
            ${iconButtonMainMenu}
        </div>
        `
    );
}

export { NavigationMenu };
