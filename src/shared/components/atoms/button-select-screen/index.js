import './style.css';

function ButtonSelectScreen({ text = 'button', id = undefined }) {

    return (
        `
	    <button class="button-select-screen" id=${id}>
            ${text}
        </button>
        `
    );
}

export { ButtonSelectScreen };
