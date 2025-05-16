import { DARK_THEME } from '@shared-constants/color-themes';

import './style.css';


function IconButtonColorTheme({ coreState }) {
    const { UserPreferencesState: { appearance: { colorTheme } } } = coreState;
    const checked = colorTheme === DARK_THEME ? true : false;

    return (
        `
        <label class="icon-button-color-theme" data-size="small">
            <div>
                <input id="theme" type="checkbox" ${checked ? 'checked' : ''} />
            </div>
        </label>
        `
    );
}

export { IconButtonColorTheme };
