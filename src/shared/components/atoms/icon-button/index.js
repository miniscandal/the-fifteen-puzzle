import './style.css';

function IconButton({ id = undefined, name = 'code', size = 'regular' }) {

    return (
        `
        <button class="icon-button" id=${id} data-size=${size} data-name=${name}>
        </button>
        `
    );
}

export { IconButton };
