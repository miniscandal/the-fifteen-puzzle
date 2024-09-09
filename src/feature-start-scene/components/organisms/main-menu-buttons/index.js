import { TitleH1 } from '../../../../shared/components/atoms/title-h1';
import { SelectSceneButton } from '../../../../shared/components/atoms/select-scene-button';

function mainMenuButtonsCode() {
    const handleClick = () => {
        console.log('descendant');
    };

    document.getElementById('start').addEventListener('click', handleClick);
}


function MainMenuButtons() {
    const titleH1 = TitleH1({});

    const buttons = [
        { text: 'start', id: 'start' },
        { text: 'train', id: 'train' },
        { text: 'help', id: 'help' },
        { text: 'settings', id: 'settings' },
    ];

    const buttonElement = buttons.map((properties) => SelectSceneButton(properties));

    return (
        `
        <div id="start">
            ${titleH1}
            <div>
                ${buttonElement.join('')}
            </div>
        </div>
        `
    );
}

export { MainMenuButtons, mainMenuButtonsCode };
