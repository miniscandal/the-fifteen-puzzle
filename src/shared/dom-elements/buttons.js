import { BTN_THEME_TOGGLE_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


const domElementButtonSelectPracticeScreen = () => document.getElementById(BTN_PRACTICE_SCREEN_ID);
const domElementButtonSelectStartScreen = () => document.getElementById(BTN_START_SCREEN_ID);
const domElementButtonSelectPlayScreen = () => document.getElementById(BTN_PLAY_SCREEN_ID);
const domElementButtonSelectBackScreen = () => document.getElementById(BTN_BACK_SCREEN_ID);
const domElementButtonSelectPuzzleGridCollection = () => document.getElementById(PUZZLE_GRID_COLLECTION_ID);
const domElementButtonSelectThemeToggle = () => document.getElementById(BTN_THEME_TOGGLE_ID);

export {
    domElementButtonSelectPracticeScreen,
    domElementButtonSelectStartScreen,
    domElementButtonSelectPlayScreen,
    domElementButtonSelectBackScreen,
    domElementButtonSelectPuzzleGridCollection,
    domElementButtonSelectThemeToggle
};
