function updateScreenMode({
    screenMode,
    coreObjects
}) {
    const { ScreenModeController, ScreenSetupController } = coreObjects;
    const { html, uiFunctionality, screenName } = ScreenModeController.modes[screenMode](coreObjects);

    ScreenSetupController.setupRoutine({
        html,
        uiFunctionality,
        screenName
    });
}

export { updateScreenMode };
