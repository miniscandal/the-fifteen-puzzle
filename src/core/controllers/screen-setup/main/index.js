import { APP_ID } from '@shared-constants/dom-element-identifiers';


const ScreenSetupController = {
    setup: {
        renderHtml: (html) => document.querySelector(APP_ID).innerHTML = html(),
        initializeFunctionality: (uiFunctionality) => uiFunctionality()
    },
    routine({ html, uiFunctionality }) {
        this.setup.renderHtml(html);
        this.setup.initializeFunctionality(uiFunctionality);
    },
};

export { ScreenSetupController };
