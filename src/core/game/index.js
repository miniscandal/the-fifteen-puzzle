const game = {
    scene: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        functionality: (code) => code()
    }
};

export { game };
