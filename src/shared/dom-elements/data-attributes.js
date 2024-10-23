const domElementTiles = () => document.querySelectorAll('[data-play-enabled="true"][data-symbol]');
const domElementEmptyTile = () => document.querySelector('[data-id="0"]');

export {
    domElementTiles,
    domElementEmptyTile
};
