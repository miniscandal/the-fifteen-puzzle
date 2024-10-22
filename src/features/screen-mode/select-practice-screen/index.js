function selectPracticeScreen({ ScreenModeController, ScreenSetupController, PrefersColorSchemeController }) {
    const { html, uiFunctionality, screenName } = ScreenModeController.modes.practice({
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

export { selectPracticeScreen };
