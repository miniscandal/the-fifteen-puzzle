import './style.css';

function gameScreenLogic() {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const currentTheme = body.dataset.themeColor;
        body.dataset.themeColor = currentTheme === 'light' ? 'dark' : 'light';
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
}

function GameScreen({ children }) {

    return (
        `
        <div class="game_screen">
            <button id="theme">Theme</button>
            ${children}
        </div>
        `
    );
}

export { GameScreen, gameScreenLogic };
