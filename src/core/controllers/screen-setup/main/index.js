import { APP_ID } from '@shared-constants/dom-element-identifiers';


const DomScreenSetupController = {
    render(selector, html) {
        document.querySelector(selector).innerHTML = html;
    },

    setup({ htmlFunctionality, uiFunctionality }) {
        this.render(APP_ID, htmlFunctionality());
        uiFunctionality();
    }
};

export { DomScreenSetupController };
