function selectStartScreen({ Game, Screens, screenId }) {
    if (screenId === 'start') {
        return;
    }

    const mainMenu = ({ Game, Screens }) => {
        const { html, logic, name } = Screens.start({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;

        Game.puzzle.id = undefined;
    };

    document.getElementById('back').addEventListener('click', () => {
        mainMenu({ Game, Screens });
    });
}

export { selectStartScreen };
