import { selectStartScreen } from '../select-start-screen';

function navigationMenu({ Game, Screens, screenSymbol }) {
    console.log(screenSymbol);

    selectStartScreen({ Game, Screens, screenSymbol });
}

export { navigationMenu };
