import { Screen } from '@shared-components/templates/screen';
import { TitleH1 } from '@shared-components/atoms/title-h1';

import { Artwork } from '@feature-start-screen/components/organisms/artwork';
import { MainMenu } from '@feature-start-screen/components/organisms/main-menu';

import './style.css';

function StartScreen({ screenSymbol }) {
    const titleH1 = TitleH1({ text: 'the fifteen puzzle' });
    const artwork = Artwork();
    const mainMenu = MainMenu();

    const children = (
        `
        <article class="start-screen">
            ${titleH1}
            ${artwork}
            ${mainMenu}
        </article>
        `
    );

    return Screen({
        children,
        screenSymbol
    });
}


export { StartScreen };
