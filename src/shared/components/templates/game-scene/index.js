import './style.css';

function gameSceneFunctionality() {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const currentTheme = body.dataset.themeColor;
        body.dataset.themeColor = currentTheme === 'light' ? 'dark' : 'light';
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

function GameScene({ children }) {

    return (
        `
        <div class="game_scene">
            <button id="theme">Theme</button>
            ${children}
        </div>
        `
    );
}

export { GameScene, gameSceneFunctionality };
