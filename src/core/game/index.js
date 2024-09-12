const game = {
    scene: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        logic: (code) => code()
    }
};

export { game };
