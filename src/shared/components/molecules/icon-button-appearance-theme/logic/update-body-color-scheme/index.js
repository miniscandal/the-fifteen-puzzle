function updateBodyPreferColorScheme(themeColor) {
    const body = document.querySelector('body');

    body.dataset.themeColor = themeColor;
}

export { updateBodyPreferColorScheme };
