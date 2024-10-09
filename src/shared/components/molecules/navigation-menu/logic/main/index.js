import { selectStartScreen } from '../select-start-screen';

function navigationMenu({ Game, Screens, screenSymbol }) {
    selectStartScreen({ Game, Screens, screenSymbol });
}

export { navigationMenu };
