import { COLOR_THEME_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


const domElementIconButtonColorTheme = () => document.getElementById(COLOR_THEME_ID);
const domElementButtonSelectScreenPractice = () => document.getElementById(SELECT_PRACTICE_SCREEN_ID);
const domElementButtonSelectStartPractice = () => document.getElementById(SELECT_START_SCREEN_ID);


export {
    domElementIconButtonColorTheme,
    domElementButtonSelectScreenPractice,
    domElementButtonSelectStartPractice
};
