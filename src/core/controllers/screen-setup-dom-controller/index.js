import { DOM_ELEMENT_APP_ID } from '@shared-constants/dom-element-identifiers';


const ScreenSetupDomController = {
    render(selector, html) {
        document.querySelector(selector).innerHTML = html;
    },

    setup({ prepareHtmlStructure, setupUiLogic }) {
        this.render(DOM_ELEMENT_APP_ID, prepareHtmlStructure());
        setupUiLogic();
    }
};

export { ScreenSetupDomController };
