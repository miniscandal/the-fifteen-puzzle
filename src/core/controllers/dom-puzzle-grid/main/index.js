const DomPuzzleGrid = {
    replaceElementContent: ({ container, htmlString, domParser = new DOMParser() }) => {
        const documentFragment = domParser.parseFromString(htmlString, 'text/html');
        const newChild = documentFragment.body.firstElementChild;
        const oldChild = container.firstElementChild;

        container.replaceChild(newChild, oldChild);
    },

    validateSelectableTile: ({ tile, dataAttr }) => {
        const isTile = !!tile && tile.hasAttribute(dataAttr);

        return isTile && tile.dataset.playEnabled === 'true';
    },

    resetSelectableTiles: ({ tiles, dataAttrPlayEnabled, dataAttrMoveDirection }) => {
        tiles.forEach(tile => {
            tile.setAttribute(dataAttrPlayEnabled, false);
            tile.setAttribute(dataAttrMoveDirection, null);
        });
    },

    swapDataTiles: (currentTile, emptyTile) => {
        const { row: currentRow, column: currentColumn, index: currentIndex } = currentTile.dataset;
        const { row: emptyRow, column: emptyColumn, index: emptyIndex } = emptyTile.dataset;

        currentTile.style.gridRow = emptyRow;
        currentTile.style.gridColumn = emptyColumn;
        currentTile.dataset.row = emptyRow;
        currentTile.dataset.column = emptyColumn;

        emptyTile.style.gridRow = currentRow;
        emptyTile.style.gridColumn = currentColumn;
        emptyTile.dataset.row = currentRow;
        emptyTile.dataset.column = currentColumn;

        emptyTile.dataset.index = currentIndex;
        currentTile.dataset.index = emptyIndex;
    },

    updateSelectableTiles: ({ tiles, queryFn }) => {
        tiles.forEach(tile => {
            const { index, movementDirection } = tile;
            const movableTile = queryFn(index);

            movableTile.dataset.playEnabled = true;
            movableTile.dataset.movementDirection = movementDirection;
        });
    }
};

export { DomPuzzleGrid };
