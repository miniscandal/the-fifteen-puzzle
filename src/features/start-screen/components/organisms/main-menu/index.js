import { TitleH2 } from '@shared-components/atoms/title-h2';
import { Navigation } from '@feature-start-screen/components/molecules/navigation';

import './style.css';

function MainMenu() {
    const titleH2 = TitleH2({
        text: 'game options'
    });
    const navigation = Navigation();

    return (
        `
        <section class="main-menu">
            ${titleH2}
            ${navigation}
        </section>
        `
    );
}

export { MainMenu };
