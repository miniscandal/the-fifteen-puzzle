function selectStartScreen({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const { html, uiFunctionality, screenName } = ScreenModeController.modes.start({
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

export { selectStartScreen };
