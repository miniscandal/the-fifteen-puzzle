import { COLOR_THEME_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_PRACTICE_SCREEN_ID } from '@shared-constants/dom-element-identifiers';
import { SELECT_START_SCREEN_ID } from '@shared-constants/dom-element-identifiers';


function getElementIconButtonColorTheme() {
    return document.getElementById(COLOR_THEME_ID);
}

function getElementButtonSelectScreenPractice() {
    return document.getElementById(SELECT_PRACTICE_SCREEN_ID);
}

function getElementButtonSelectStartPractice() {
    return document.getElementById(SELECT_START_SCREEN_ID);
}

export {
    getElementIconButtonColorTheme,
    getElementButtonSelectScreenPractice,
    getElementButtonSelectStartPractice
};
