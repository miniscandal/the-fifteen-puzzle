import { LIGHT_THEME } from '@shared-constants/color-themes';


const UserPreferencesState = {
    appearance: {
        colorTheme: LIGHT_THEME,
    },
    audio: {
        isMuted: false,
        volumeLevel: 50,
    }
};

export { UserPreferencesState };
