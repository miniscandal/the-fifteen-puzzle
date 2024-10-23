import { updateScreenMode } from '@feat-screen-mode/update-screen-mode';


function addEventListenerSelectScreenMode({ coreObjects, getElement, screenMode }) {
    const button = getElement();

    button.addEventListener('click', function () {
        updateScreenMode({
            screenMode,
            ...coreObjects
        });
    });
}

export { addEventListenerSelectScreenMode };
