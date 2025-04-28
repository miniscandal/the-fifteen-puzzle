import { COLOR_THEME_ID, PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';

import { SELECT_GAME_SCREEN_PRACTICE_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_GAME_SCREEN_START_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_GAME_SCREEN_PLAY_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


const domElementIconButtonColorTheme = () => document.getElementById(COLOR_THEME_ID);

const domElementButtonSelectPracticeScreen = () => document.getElementById(SELECT_GAME_SCREEN_PRACTICE_ID);
const domElementButtonSelectStartScreen = () => document.getElementById(SELECT_GAME_SCREEN_START_ID);
const domElementButtonSelectPlayScreen = () => document.getElementById(SELECT_GAME_SCREEN_PLAY_ID);
const domElementButtonSelectBackScreen = () => document.getElementById(SELECT_BACK_SCREEN_ID);
const domElementButtonSelectPuzzleGridCollection = () => document.getElementById(PUZZLE_GRID_COLLECTION_ID);

export {
    domElementIconButtonColorTheme,
    domElementButtonSelectPracticeScreen,
    domElementButtonSelectStartScreen,
    domElementButtonSelectPlayScreen,
    domElementButtonSelectBackScreen,
    domElementButtonSelectPuzzleGridCollection
};
