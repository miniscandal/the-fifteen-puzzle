import { startSceneLogic } from './start';
import { trainScreenLogic } from './train';

const GameScreens = {
    start: startSceneLogic,
    train: trainScreenLogic
};

export { GameScreens };
