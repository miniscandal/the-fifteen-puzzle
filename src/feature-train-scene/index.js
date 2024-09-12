import { GameScene } from "../shared/components/templates/game-scene";

function trainScene({ game }) {
    game.scene.render(GameScene({ children: html() }));
}

function html() {
    return (
        `
        <span>train scene</span>
        `
    );
}

export { trainScene };
