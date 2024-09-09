import { TitleH1 } from '../shared/components/atoms/title-h1';
import { SelectSceneButton } from '../shared/components/atoms/select-scene-button';

function startScene({ game }) {
    game.scene(html());

    const handleClick = () => {
        console.log('descendant');
    };

    const button = {
        start: SelectSceneButton({ text: 'start', handleClick }),
        train: SelectSceneButton({ text: 'train', handleClick }),
        help: SelectSceneButton({ text: 'help', handleClick }),
        settings: SelectSceneButton({ text: 'settings', handleClick }),
    };

    const div = document.querySelector('#start div');
    div.appendChild(button.start);
    div.appendChild(button.train);
    div.appendChild(button.help);
    div.appendChild(button.settings);
}

function html() {
    const titleH1 = TitleH1({});

    return (
        `
        <div id="start">
            ${titleH1}
            <div>
            </div>
        </div>
        `
    );
}


export { startScene };
