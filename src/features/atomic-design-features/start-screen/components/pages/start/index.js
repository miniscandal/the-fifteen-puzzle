import { ScreenMode } from '@shared-components/templates/screen-mode';
import { TitleH1 } from '@shared-components/atoms/title-h1';

import { Artwork } from '@feat-atomic-design-start-screen/components/organisms/artwork';
import { MainMenu } from '@feat-atomic-design-start-screen/components/organisms/main-menu';

import './style.css';


function Start(coreState) {
    const titleH1 = TitleH1({ text: 'the fifteen puzzle' });
    const artwork = Artwork();
    const mainMenu = MainMenu();

    const children = (
        `
        <article class="start-page">
            ${titleH1}
            ${artwork}
            ${mainMenu}
        </article>
        `
    );


    return ScreenMode({
        children,
        enablePrimarySideBar: false,
        coreState
    });
}
export { Start };
