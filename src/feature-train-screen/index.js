import { GameScreen, gameScreenLogic } from '../shared/components/templates/game-screen';

function trainScreen({ game }) {
    game.screen.render(GameScreen({ children: html() }));
    game.screen.logic(() => {
        gameScreenLogic();
    });
}

function html() {
    return (
        `
        <span>train screen</span>
        `
    );
}

export { trainScreen };
