function SelectSceneButton({ text = 'button', handleClick = () => undefined }) {
    return html({ text, handleClick });
}

function html({ text, handleClick }) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', handleClick);

    return button;
}

export { SelectSceneButton };
