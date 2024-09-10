import { TitleH2 } from '../../../../shared/components/atoms/title-h2';
import { SelectSceneButton } from '../../../../shared/components/atoms/select-scene-button';

function mainMenuButtonsCode() {
    const handleClick = () => {
        console.log('descendant');
    };

    document.getElementById('start').addEventListener('click', handleClick);
}


function MainMenuButtons() {
    const titleH2 = TitleH2({
        text: 'Select Game Option'
    });

    const buttons = [
        { text: 'start', id: 'start' },
        { text: 'train', id: 'train' },
        { text: 'help', id: 'help' },
        { text: 'settings', id: 'settings' },
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

export { MainMenuButtons, mainMenuButtonsCode };
