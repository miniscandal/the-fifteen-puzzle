const ScreenManagementDomController = {
    enabledButtonPlay: (button) => button.classList.add('enabled'),

    setSelectedPuzzleGridStyle: ({ selectedPuzzle, previousSelectedPuzzle }) => {
        if (selectedPuzzle.dataset.puzzleId === previousSelectedPuzzle?.dataset.puzzleId) {

            return;
        }

        selectedPuzzle.classList.add('selected');
        previousSelectedPuzzle?.classList.remove('selected');
    }
};


export { ScreenManagementDomController };
