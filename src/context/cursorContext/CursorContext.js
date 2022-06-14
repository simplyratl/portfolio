import CursorReducers from "./CursorReducers";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    cursorTriger: false,
};

export const CursorContext = createContext(INITIAL_STATE);

export const CursorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CursorReducers, INITIAL_STATE);

    return (
        <CursorContext.Provider
            value={{
                cursorTriger: state.cursorTriger,
                dispatch,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};
