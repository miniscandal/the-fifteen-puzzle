import { trainSceneLogic } from '../../../logic/select-scene/train';

import { TitleH2 } from '../../../../shared/components/atoms/title-h2';
import { SelectSceneButton } from '../../../../shared/components/atoms/select-scene-button';

function mainMenuButtonsLogic({ game }) {
    document.getElementById('select-train-screen').addEventListener('click', () => trainSceneLogic({ game }));
}


function MainMenuButtons() {
    const titleH2 = TitleH2({
        text: 'Select Game Option'
    });

    const buttons = [
        { text: 'play', id: 'select-gameplay-screen' },
        { text: 'train', id: 'select-train-screen' },
        { text: 'help', id: 'select-help-screen' },
        { text: 'settings', id: 'select-settings-screen' },
    ];

    const buttonElement = buttons.map((properties) => SelectSceneButton(properties));

    return (
        `
        <div>
            ${titleH2}
            <div>
                ${buttonElement.join('')}
            </div>
        </div>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsLogic };
