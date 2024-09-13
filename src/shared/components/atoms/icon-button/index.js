import { iconCode } from './variants';

import './style.css';

function IconButton({ id, name = iconCode, size = 'regular' }) {

    return (
        `
        <button class="icon-button" id=${id} data-size=${size}>
            <img src="${name}" alt="icon"/>
        </button>
        `
    );
}

export { IconButton };
