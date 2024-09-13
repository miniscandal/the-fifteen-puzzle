const Game = {
    screen: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        logic: (code) => code()
    }
};

export { Game };
