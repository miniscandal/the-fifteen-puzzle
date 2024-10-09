import { selectStartScreen } from '../select-start-screen';

function navigationMenu({ Game, Screens, screenId }) {
    selectStartScreen({ Game, Screens, screenId });
}

export { navigationMenu };
