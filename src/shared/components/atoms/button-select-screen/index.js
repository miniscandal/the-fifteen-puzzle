import './style.css';

function ButtonSelectScreen({
    text = 'button',
    id = undefined,
    enabled = true
}) {
    const classList = [enabled ? 'enabled' : ''];

    return (
        `
	    <button class="button-select-screen ${classList.join('')}" id=${id}>
            ${text}
        </button>
        `
    );
}

export { ButtonSelectScreen };
