function goToGamePlayScreen({
    screenId,
    coreControllers,
    coreFactories,
    setupGamePlay,
    domActions,
    domElementAccessors,
    screenHandlers,
    coreState
}) {

    return screenHandlers[screenId]({
        coreControllers,
        coreFactories,
        setupGamePlay,
        domActions,
        domElementAccessors,
        coreState
    });

}

export { goToGamePlayScreen };
