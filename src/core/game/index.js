const Game = {
    screen: {
        render: function ({ html, logic, name }) {
            document.querySelector('#app').innerHTML = html;
            logic();
            this.current = name;
        },
        current: undefined
    }
};

export { Game };
