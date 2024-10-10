import { LIGHT } from '@shared-constants/prefers-color-scheme';

const Game = {
    screen: {
        htmlRender: ({ html }) => {
            document.querySelector('#app').innerHTML = html;
        },
        setupLogic: ({ logic }) => logic(),
        currentSymbol: undefined,
    },
    puzzle: {
        id: undefined,
        permutation: [],
        state: [],
        solved: false
    },
    theme: {
        currentName: LIGHT
    },
    setupScreenRoutine: function ({ html, logic, screenSymbol }) {
        this.screen.htmlRender({ html });
        this.screen.setupLogic({ logic });
        this.screen.currentSymbol = screenSymbol;
    }
};

export { Game };
