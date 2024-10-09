import { ButtonSelectScreen } from '@shared-components/atoms/button-select-screen';

import { START } from '@core-screen-management/constants/screen-names';

import './style.css';

function NavigationMenu({ screenSymbol }) {
    if (screenSymbol === START) {
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
