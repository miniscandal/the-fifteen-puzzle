const Game = {
    screen: {
        htmlRender: ({ html }) => {
            document.querySelector('#app').innerHTML = html;
        },
        setupLogic: ({ logic }) => logic(),
        currentName: undefined
    },
    theme: {
        currentName: 'light'
    }
};

export { Game };
