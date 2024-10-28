function addEventListenerSelectScreenMode({
    getElement,
    updateScreenMode
}) {
    const button = getElement();

    button?.addEventListener('click', function () {
        updateScreenMode();
    });
}

export { addEventListenerSelectScreenMode };
