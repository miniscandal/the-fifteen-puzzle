function selectPracticeScreen({ Game, Screens }) {
    document.getElementById('select-practice-screen').addEventListener('click', () => {
        const { html, logic, ScreenSymbol } = Screens.practice({ Game, Screens });

        Game.screen.htmlRender({ html });
        Game.screen.setupLogic({ logic });
        Game.screen.currentName = ScreenSymbol;
    });
}


export { selectPracticeScreen };
