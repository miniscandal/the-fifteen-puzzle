function selectPracticeScreen({ Game, Screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        const { html, logic, name } = Screens.practice({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = name;
    });
}


export { selectPracticeScreen };
