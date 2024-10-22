import { APP_ID } from '@shared-constants/dom-element-identifiers';


const ScreenSetupController = {
    setup: {
        renderHtml: function (html) {
            const appElement = document.querySelector(APP_ID);

            appElement.innerHTML = html;
        },
        initializeFunctionality: function (uiFunctionality) {
            uiFunctionality();
        }
    },
    setupRoutine: function ({ html, uiFunctionality, screenName, ScreenModeController }) {
        this.setup.renderHtml(html);
        this.setup.initializeFunctionality(uiFunctionality);
        ScreenModeController.currentMode = screenName;
    },
};

export { ScreenSetupController };
