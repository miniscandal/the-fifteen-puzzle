import { ScreenMode } from '@shared-components/templates/screen-mode';
import { TitleH1 } from '@shared-components/atoms/title-h1';

import { Artwork } from '@feat-screen-ui-start/components/organisms/artwork';
import { MainMenu } from '@feat-screen-ui-start/components/organisms/main-menu';

import './style.css';

function Start() {
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
        enablePrimarySideBar: false
    });
}
export { Start };
