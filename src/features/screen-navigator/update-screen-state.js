function updateScreenState({ state, history, screenId }) {
    const { currentId } = state;
    const updatedHistory = [...history, screenId];


    return {
        previousId: currentId,
        currentId: screenId,
        history: updatedHistory
    };
}

export { updateScreenState };
