function goToGamePlayScreen({
    screenId,
    coreControllers,
    coreFactories,
    setupGamePlay,
    domActions,
    screenHandlers,
    coreState
}) {

    return screenHandlers[screenId]({
        coreControllers,
        coreFactories,
        setupGamePlay,
        domActions,
        coreState
    });

}

export { goToGamePlayScreen };
