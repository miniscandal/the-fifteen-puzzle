function addEventListenerSelectScreenMode({
    coreObjects,
    getElement,
    screenMode,
    updateScreenMode
}) {
    const button = getElement();

    button.addEventListener('click', function () {
        updateScreenMode({
            screenMode,
            coreObjects
        });
    });
}

export { addEventListenerSelectScreenMode };
