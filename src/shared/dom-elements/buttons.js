import { COLOR_THEME_ID, SELECT_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


const domElementIconButtonColorTheme = () => document.getElementById(COLOR_THEME_ID);

const domElementButtonSelectPracticeScreen = () => document.getElementById(SELECT_PRACTICE_SCREEN_ID);
const domElementButtonSelectStartScreen = () => document.getElementById(SELECT_START_SCREEN_ID);
const domElementButtonSelectPlayScreen = () => document.getElementById(SELECT_PLAY_SCREEN_ID);


export {
    domElementIconButtonColorTheme,
    domElementButtonSelectPracticeScreen,
    domElementButtonSelectStartScreen,
    domElementButtonSelectPlayScreen
};
