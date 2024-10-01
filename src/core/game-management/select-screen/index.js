function selectPracticeScreen({ Game, Screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.practice({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}

function selectStartScreen({ Game, Screens, screenId }) {
    if (screenId === 'start') {
        return;
    }

    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, name } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    };

    document.getElementById('back').addEventListener('click', () => {
        mainMenu({ Game, Screens });
    });
}

function selectPlayScreen({ Game, Screens }) {
    document.getElementById('select-play-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.play({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}

export { selectPracticeScreen, selectStartScreen, selectPlayScreen };
