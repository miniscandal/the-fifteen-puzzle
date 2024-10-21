import { iconMoon } from '@shared-components/atoms/icon-button/variants';
import { iconSun } from '@shared-components/atoms/icon-button/variants';

function toggleIconButtonColorTheme() {
    const { dataset } = this;

    dataset.name = dataset.name === iconMoon ? iconSun : iconMoon;
}

export { toggleIconButtonColorTheme };
