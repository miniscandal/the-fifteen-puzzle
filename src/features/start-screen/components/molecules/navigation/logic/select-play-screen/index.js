function selectPlayScreen({ Game, Screens }) {
    document.getElementById('select-play-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.play({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}

export { selectPlayScreen };
