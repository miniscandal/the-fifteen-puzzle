import { startSceneLogic } from './start';
import { PracticeScreenLogic } from './practice';

const GameScreens = {
    start: startSceneLogic,
    practice: PracticeScreenLogic
};

export { GameScreens };
