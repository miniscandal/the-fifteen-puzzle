import './style.css';

function gameScreenLogic({ game, screens }) {
    const toggleTheme = () => {
        const body = document.querySelector('body');
        const currentTheme = body.dataset.themeColor;
        body.dataset.themeColor = currentTheme === 'light' ? 'dark' : 'light';
    };

    const mainMenu = ({ game, screens }) => {
        game.screen.render(screens.start({ game, screens }));
    };

    document.getElementById('theme').addEventListener('click', toggleTheme);

    if (game.screen.current === 'start') {
        document.getElementById('main-menu').addEventListener('click', () => {
            mainMenu({ game, screens });
        });
    }
}

function GameScreen({ children, game }) {
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
