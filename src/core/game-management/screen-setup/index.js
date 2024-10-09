function screenSetup({ Game, html, logic, screenSymbol }) {
    Game.screen.htmlRender({ html });
    Game.screen.setupLogic({ logic });
    Game.screen.currentSymbol = screenSymbol;
}

export { screenSetup };
