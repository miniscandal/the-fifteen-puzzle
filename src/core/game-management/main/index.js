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
    mode: undefined,
    playSequence: {
        isCompleted: false
    },
    appearance: {
        theme: {
            current: LIGHT
        }
    },
    setupScreenRoutine: function ({ html, logic, screenSymbol }) {
        this.screen.htmlRender({ html });
        this.screen.setupLogic({ logic });
        this.screen.currentSymbol = screenSymbol;
    },
    updateGameState: function ({ currentElement, emptyElement }) {
        const { id: currentId, index: currentIndex } = currentElement;
        const { id: emptyId, index: emptyIndex } = emptyElement;

        Game.puzzle.state[currentIndex] = currentId;
        Game.puzzle.state[emptyIndex] = emptyId;
    }
};

export { Game };
