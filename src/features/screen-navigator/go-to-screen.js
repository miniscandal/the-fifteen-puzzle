function goToScreen({
    screenId,
    coreControllers,
    coreFactories,
    domActions,
    screenHandlers,
    coreState
}) {

    return screenHandlers[screenId]({
        coreControllers,
        coreFactories,
        domActions,
        coreState
    });
}

export { goToScreen };
