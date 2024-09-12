const game = {
    screen: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        logic: (code) => code()
    }
};

export { game };
