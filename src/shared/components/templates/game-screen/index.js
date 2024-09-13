import './style.css';

function gameScreenLogic({ game, gameScreens }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const currentTheme = body.dataset.themeColor;
        body.dataset.themeColor = currentTheme === 'light' ? 'dark' : 'light';
    };

    const mainMenu = ({ game, gameScreens }) => {
        gameScreens.start({ game, gameScreens });
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);
    document.getElementById('main-menu').addEventListener('click', () => {
        mainMenu({ game, gameScreens });
    });
}

function GameScreen({ children }) {

    return (
        `
        <div class="game-screen">
            <div>
                <button id="theme">Theme</button>
                <button id="main-menu">Main Menu</button>
            </div>
            ${children}
        </div>
        `
    );
}

export { GameScreen, gameScreenLogic };
