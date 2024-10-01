function selectPracticeScreen({ Game, Screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.practice({ Game, Screens });
        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}

function selectStartScreen({ Game, Screens, screenId }) {
    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, name } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    };

    if (screenId === 'start') {
        return;
    }

    document.getElementById('back').addEventListener('click', () => {
        mainMenu({ Game, Screens });
    });
}

export { selectPracticeScreen, selectStartScreen };
