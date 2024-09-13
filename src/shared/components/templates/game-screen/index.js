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

    if (game.screen.current === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ game, gameScreens });
        });
    }
}

function GameScreen({ children, game }) {
    console.log(game.screen.current);

    const buttonMainMenu = game.screen.current !== 'start' ? '' : '<button id="main-menu">Main Menu</button>';

    return (
        `
        <div class="game-screen">
            <div>
                <button id="theme">Theme</button>
                ${buttonMainMenu}
            </div>
            ${children}
        </div>
        `
    );
}

export { GameScreen, gameScreenLogic };
