const Game = {
    screen: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        logic: (code) => code(),
        current: undefined
    }
};

export { Game };
