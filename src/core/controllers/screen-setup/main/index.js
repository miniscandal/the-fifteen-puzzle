import { APP_ID } from '@shared-constants/dom-element-identifiers';


const DomScreenSetupController = {
    render(selector, html) {
        document.querySelector(selector).innerHTML = html;
    },

    setup({ prepareHtmlStructure, setupUiLogic }) {
        this.render(APP_ID, prepareHtmlStructure());
        setupUiLogic();
    }
};

export { DomScreenSetupController };
