import './style.css';

function IconButton({ id = undefined, name = 'code-bracket-square', size = 'regular' }) {

    return (
        `
        <button class="icon-button" id=${id} data-size=${size} data-name=${name}>
            <div></div>
        </button>
        `
    );
}

export { IconButton };
