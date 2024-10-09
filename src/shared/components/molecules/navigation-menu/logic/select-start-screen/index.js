import { START } from '@core-screen-management/constants/screen-names';

function selectStartScreen({ Game, Screens, screenSymbol }) {
    if (screenSymbol === START) {
        return;
    }

    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, screenSymbol } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentSymbol = screenSymbol;
        Game.puzzle.id = undefined;
    };

    document.getElementById('back').addEventListener('click', () => {
        mainMenu({ Game, Screens });
    });
}

export { selectStartScreen };
