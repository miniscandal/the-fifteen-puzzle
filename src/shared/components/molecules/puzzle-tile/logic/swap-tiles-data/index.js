function swapTilesData(currentTile, emptyTile) {
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
}

export { swapTilesData };
