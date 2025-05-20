import { BTN_THEME_TOGGLE_ID } from '@shared-constants/dom-element-identifiers';
import { PUZZLE_GRID_COLLECTION_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_PLAY_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { BTN_BACK_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


const ButtonsDomElementAccessors = {
    getPracticeScreenButton: () => document.getElementById(BTN_PRACTICE_SCREEN_ID),
    getStartScreenButton: () => document.getElementById(BTN_START_SCREEN_ID),
    getPlayScreenButton: () => document.getElementById(BTN_PLAY_SCREEN_ID),
    getBackScreenButton: () => document.getElementById(BTN_BACK_SCREEN_ID),
    getPuzzleGridCollection: () => document.getElementById(PUZZLE_GRID_COLLECTION_ID),
    getThemeToggleButton: () => document.getElementById(BTN_THEME_TOGGLE_ID)
};

export { ButtonsDomElementAccessors };
