import { startSceneLogic } from '../../shared/logic/screens/start';
import { trainScreenLogic } from '../../shared/logic/screens/train';

const Game = {
    screen: {
        render: (html) => document.querySelector('#app').innerHTML = html,
        logic: (code) => code()
    }
};

const GameScreens = {
    start: startSceneLogic,
    train: trainScreenLogic
};

export { Game, GameScreens };
