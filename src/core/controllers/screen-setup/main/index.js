import { APP_ID } from '@shared-constants/dom-element-identifiers';


function createScreenSetupManager() {
    const renderHtml = (html) => document.querySelector(APP_ID).innerHTML = html();
    const initializeFunctionality = (uiFunctionality) => uiFunctionality();

    const routine = ({ html, uiFunctionality }) => {
        renderHtml(html);
        initializeFunctionality(uiFunctionality);
    };

    return { routine };
}

const ScreenSetupController = createScreenSetupManager();

export { ScreenSetupController };
