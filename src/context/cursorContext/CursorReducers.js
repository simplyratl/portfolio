const CursorReducers = (state, action) => {
    switch (action.type) {
        case "CURSOR_ENTER":
            return {
                cursorTriger: true,
            };

        case "CURSOR_LEAVE":
            return {
                cursorTriger: false,
            };

        default:
            return { ...state };
    }
};

export default CursorReducers;
