function updateScreenState(screenHistory, screenId) {
    const { currentId, history } = screenHistory;


    return {
        previousId: currentId,
        currentId: screenId,
        history: history.push(screenId)
    };
}

export { updateScreenState };
