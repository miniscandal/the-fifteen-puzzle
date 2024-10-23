function updateScreenMode({ screenMode, ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const { html, uiFunctionality, screenName } = ScreenModeController.modes[screenMode]({
        ScreenModeController,
        ScreenSetupController,
        PrefersColorSchemeController
    });

    ScreenSetupController.setupRoutine({
        html,
        uiFunctionality,
        screenName,
        ScreenModeController
    });
}

export { updateScreenMode };
