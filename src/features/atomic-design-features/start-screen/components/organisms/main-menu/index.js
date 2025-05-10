import { TitleH2 } from '@shared-components/atoms/title-h2';
import { NavigationScreenMode } from '@feat-atomic-design-start-screen/components/molecules/navigation-screen-mode';

import './style.css';

function MainMenu() {
    const titleH2 = TitleH2({ text: 'game options' });
    const navigationScreenMode = NavigationScreenMode();

    return (
        `
        <section class="main-menu">
            ${titleH2}
            ${navigationScreenMode}
        </section >
        `
    );
}

export { MainMenu };
