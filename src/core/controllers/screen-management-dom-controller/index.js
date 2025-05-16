import { DARK_THEME } from '@shared-constants/color-themes';
import { LIGHT_THEME } from '@shared-constants/color-themes';


const ScreenManagementDomController = {
    enabledButtonPlay: (button) => button.classList.add('enabled'),

    setSelectedPuzzleGridStyle: ({ selectedPuzzle, previousSelectedPuzzle }) => {
        if (selectedPuzzle.dataset.puzzleId === previousSelectedPuzzle?.dataset.puzzleId) {

            return;
        }

        selectedPuzzle.classList.add('selected');
        previousSelectedPuzzle?.classList.remove('selected');
    },

    toggleThemeListener: ({ coreState }) => {
        const currentTheme = coreState.UserPreferencesState.appearance.colorTheme === DARK_THEME;

        coreState.UserPreferencesState.appearance.colorTheme = currentTheme
            ? LIGHT_THEME
            : DARK_THEME;
    }
};


export { ScreenManagementDomController };
