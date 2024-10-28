import { APP_ID } from '@shared-constants/dom-element-identifiers';


const ScreenSetupController = {
    setup: {
        renderHtml: function (html) {
            const appElement = document.querySelector(APP_ID);

            appElement.innerHTML = html();
        },
        initializeFunctionality: function (uiFunctionality) {
            uiFunctionality();
        }
    },
    routine: function ({ html, uiFunctionality }) {
        this.setup.renderHtml(html);
        this.setup.initializeFunctionality(uiFunctionality);
    },
};

export { ScreenSetupController };
