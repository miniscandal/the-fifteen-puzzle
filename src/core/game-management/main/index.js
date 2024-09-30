const Game = {
    screen: {
        htmlRender: ({ html }) => {
            document.querySelector('#app').innerHTML = html;
        },
        setupLogic: ({ logic }) => logic(),
        currentName: undefined
    },
    puzzle: {
        id: undefined,
        permutation: [],
        state: [],
        solved: false
    },
    theme: {
        currentName: 'light'
    }
};

export { Game };
