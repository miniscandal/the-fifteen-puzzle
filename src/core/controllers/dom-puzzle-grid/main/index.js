const DomPuzzleGrid = {
    domReplaceElementContent: (containerId, htmlString) => {
        const container = document.getElementById(containerId);
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(htmlString, 'text/html');
        const newContent = parsedDocument.body.firstElementChild;
        const previousContent = container.firstElementChild;

        container.replaceChild(newContent, previousContent);
    },


    validateSelectableTile: ({ element, dataAttrSymbolTile }) => {
        const isTile = !!element && element.hasAttribute(dataAttrSymbolTile);

        return isTile && element.dataset.playEnabled === 'true';
    },


    resetSelectableTiles: ({ tiles, dataAttrPlayEnabled, dataAttrMoveDirection }) => {
        tiles.forEach(tile => {
            tile.setAttribute(dataAttrPlayEnabled, false);
            tile.setAttribute(dataAttrMoveDirection, null);
        });
    },

    swapTilesData: (currentTile, emptyTile) => {
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

    updateSelectableTiles: ({ tiles, dataAttrIndexTile }) => {
        tiles.forEach(tile => {
            const { index, movementDirection } = tile;
            const movableTile = document.querySelector(dataAttrIndexTile(index));

            movableTile.dataset.playEnabled = true;
            movableTile.dataset.movementDirection = movementDirection;
        });
    }
};

export { DomPuzzleGrid };
