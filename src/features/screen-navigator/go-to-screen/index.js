function goToScreen({
    screenId,
    coreControllers,
    coreFactories,
    domActions,
    domElementAccessors,
    screenHandlers,
    coreState
}) {

    return screenHandlers[screenId]({
        coreControllers,
        coreFactories,
        domActions,
        domElementAccessors,
        coreState
    });
}

export { goToScreen };
