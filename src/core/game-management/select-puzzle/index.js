function selectPuzzle({ Game }) {
    document.getElementById('practice-screen__puzzles').addEventListener('click', (event) => {
        if (!event.target || !event.target.getAttribute('data-puzzle-id')) {
            return;
        }

        const element = event.target;
        Game.puzzle.id = element.getAttribute(['data-puzzle-id']);

        console.log(Game);
    });
};

export { selectPuzzle };
