import './style.css';

function GameScene({ children }) {

    return (
        `
        <div class="game_scene">
            ${children}
        </div>
        `
    );
}

export { GameScene };;
