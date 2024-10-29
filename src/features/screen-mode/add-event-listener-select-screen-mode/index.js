function addEventListenerSelectScreenMode({
    getElement,
    updateScreenMode
}) {
    getElement()?.addEventListener('click', function () {
        updateScreenMode();
    });
}

export { addEventListenerSelectScreenMode };
