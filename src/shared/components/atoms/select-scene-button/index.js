function SelectSceneButton({ text = 'button', id = undefined }) {
    return (
        `
	    <button id=${id}>
            ${text}
        </button>
        `
    );
}

export { SelectSceneButton };
