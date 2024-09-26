const Game = {
    screen: {
        htmlRender: ({ html }) => {
            document.querySelector('#app').innerHTML = html;
        },
        setupLogic: ({ logic }) => logic(),
        name: undefined
    },
    theme: {
        current: 'light'
    }
};

export { Game };
