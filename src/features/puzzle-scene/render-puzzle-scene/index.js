function domReplaceElementContent(containerId, htmlString) {
    const container = document.getElementById(containerId);
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    const newContent = parsedDocument.body.firstElementChild;
    const previousContent = container.firstElementChild;

    container.replaceChild(newContent, previousContent);
}

export { domReplaceElementContent };
