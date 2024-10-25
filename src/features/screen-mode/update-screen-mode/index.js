/**
 * coreObjects in start key is:
 * ScreenModeController, ScreenSetupController, PrefersColorSchemeController
 * GameModeController
 */


function updateScreenMode({
    screenMode,
    coreObjects
}) {
    const { ScreenModeController, ScreenSetupController } = coreObjects;
    const { html, uiFunctionality } = ScreenModeController.modes[screenMode](coreObjects);

    ScreenSetupController.setupRoutine({
        html,
        uiFunctionality,
        screenMode
    });

    ScreenModeController.currentMode = screenMode;
}

export { updateScreenMode };
